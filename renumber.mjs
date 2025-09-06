#!/usr/bin/env node
/**
 * Renumber Markdown files inside each subfolder in steps of 10:
 * 010_, 020_, 030_, ...
 * Each folder restarts numbering at 010.
 *
 * Usage:
 *   node renumber-md.js <rootDir> [--dry-run]
 *
 * Notes:
 * - Uses `git mv` to rename files so history is preserved in Git.
 */

import fs from "fs/promises";
import path from "node:path";
import { exec as execCb } from "child_process";
import { promisify } from "util";

const exec = promisify(execCb);

const rootDir = process.argv[2] ?? ".";
const dryRun = process.argv.includes("--dry-run");

function isMarkdown(file) {
  return /\.md$/i.test(file);
}

function zeroPad3(n) {
  return String(n).padStart(3, "0");
}

function splitPrefix(baseNoExt) {
  const m = baseNoExt.match(/^(\d+)[ _-](.+)$/);
  if (m) {
    const num = Number(m[1]);
    const rest = m[2];
    return Number.isFinite(num) ? { num, rest } : { num: "", rest: baseNoExt };
  }
  return { num: "", rest: baseNoExt };
}

async function listImmediateSubdirs(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter(e => e.isDirectory()).map(e => path.join(dir, e.name));
}

async function listMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter(e => e.isFile() && isMarkdown(e.name)).map(e => e.name);
}

function buildSortKey(name) {
  const base = name.replace(/\.md$/i, "");
  const { num, rest } = splitPrefix(base);
  if (num !== null) {
    return { group: 0, key: [num, rest.toLowerCase(), name.toLowerCase()] };
  }
  return { group: 1, key: [base.toLowerCase(), name.toLowerCase()] };
}

function makeTargetName(index, originalName) {
  const n = (index + 1) * 10;
  const prefix = zeroPad3(n);
  const ext = path.extname(originalName);
  const base = path.basename(originalName, ext);
  const { rest } = splitPrefix(base);
  const tail = rest || base;
  return `${prefix}_${tail}${ext}`;
}

async function gitMove(oldPath, newPath) {
  if (dryRun) {
    console.log(`[dry-run] git mv "${oldPath}" "${newPath}"`);
  } else {
    await exec(`git mv "${oldPath}" "${newPath}"`);
  }
}

async function processFolder(folder) {
  const files = await listMarkdownFiles(folder);
  if (files.length === 0) return;

  const sorted = [...files].sort((a, b) => {
    const A = buildSortKey(a);
    const B = buildSortKey(b);
    if (A.group !== B.group) return A.group - B.group;
    for (let i = 0; i < Math.max(A.key.length, B.key.length); i++) {
      if (A.key[i] === undefined) return -1;
      if (B.key[i] === undefined) return 1;
      if (A.key[i] < B.key[i]) return -1;
      if (A.key[i] > B.key[i]) return 1;
    }
    return 0;
  });

  console.log(`\n📁 ${folder}`);
  for (let i = 0; i < sorted.length; i++) {
    const oldName = sorted[i];
    const newName = makeTargetName(i, oldName);
    if (oldName === newName) continue;

    const oldPath = path.join(folder, oldName);
    const newPath = path.join(folder, newName);
    await gitMove(oldPath, newPath);
  }
}

async function main() {
  const absRoot = path.resolve(rootDir);
  const subdirs = await listImmediateSubdirs(absRoot);

  if (subdirs.length === 0) {
    console.log("Keine Unterordner gefunden – nichts zu tun.");
    return;
  }

  for (const folder of subdirs) {
    await processFolder(folder);
  }

  console.log(dryRun ? "\n✅ Dry-run abgeschlossen." : "\n✅ Umbenennung abgeschlossen.");
}

main().catch(err => {
  console.error("Fehler:", err);
  process.exit(1);
});
