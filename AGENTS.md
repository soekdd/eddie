# Repository Guidelines

This repository chronicles Eddie’s journey across narrative episodes. Follow the
practices below to keep the structure coherent and the editorial voice
consistent.

## Project Structure & Module Organization
- `01_Finnland`, `02_Schweden`, `03_Eddie_rechnet`, and `04_Zusatz` hold the main arcs, mathematical interludes, and background dossiers respectively.
- Chapters live in numerically prefixed Markdown files (`NNN_Title.md`). Keep the 3-digit sequence unique and align the folder prefix with the story arc.
- Each chapter starts with an H1 title followed by a fenced `json` metadata block. Maintain existing keys, especially `proofreading`, so downstream tooling can parse them.
- Update `INHALTSVERZEICHNIS.md` whenever you add or reorder chapters; link entries must match the exact relative path.

## Build, Test & Development Commands
- No build step is required; Markdown renders directly. Use these spot checks before committing:
  - `npx markdownlint-cli2 "**/*.md"` – lint formatting (install `markdownlint-cli2` globally or run via `npx`).
  - `sed -n '3,/```/p' 01_Finnland/010_Schlaflos.md | sed '$d' | python -m json.tool` – sample command to validate a chapter’s metadata block; adjust the path per file.
  - `rg -n "TODO" 0*_*/` – catch unfinished notes inside the narrative folders.

## Coding Style & Naming Conventions
- Write prose in German, first-person when following Eddie’s perspective, and keep paragraphs short for readability.
- Prefer underscores in filenames after the numeric prefix; mirror the spoken title exactly, including umlauts where already used.
- Within metadata JSON, indent with two spaces and keep keys quoted in English as currently established.
- Use fenced code blocks only for metadata or when the chapter calls for inline documents; otherwise rely on plain paragraphs.

## Testing Guidelines
- Re-read the chapter aloud to ensure the tone stays youthful and tense; cross-check any timeline references with adjacent chapters.
- Confirm every metadata key has content (avoid empty strings) and that `illustrations` paths point to existing assets.
- After edits, reopen `INHALTSVERZEICHNIS.md` in preview to verify date, synopsis, and link consistency.

## Commit & Pull Request Guidelines
- Follow the short, imperative commit messages used in history (`fix dialogs`, `format md`); keep them under ~50 characters.
- PRs should summarise the narrative change, note affected chapters, highlight any new assets, and mention whether the TOC was adjusted.
- Attach excerpts or screenshots only when layout changes matter; otherwise rely on inline quotes in the PR body.
