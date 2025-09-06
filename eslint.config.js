import markdownlintPlugin from "eslint-plugin-markdownlint";
import markdownlintParser from "eslint-plugin-markdownlint/parser.js";

export default [
  {
    files: ["**/*.md"],
    plugins: {
      'markdownlint': markdownlintPlugin
    },
    languageOptions: {
      parser: markdownlintParser
    },
    rules: {
      // Baseline: alle empfohlenen Regeln aktiv
      ...markdownlintPlugin.configs.recommended.rules,

      // Zeilenlänge & Co. feinjustieren (MD013)
      "markdownlint/md013": ["error", {
        line_length: 80,
        heading_line_length: 80,
        code_block_line_length: 120,
        ignore_code_blocks: true,
        ignore_tables: true,
        ignore_urls: true,
        ignore_elements: ["img", "a", "span", "div"]
      }],

      // Beispiele weiterer Anpassungen
      "markdownlint/MD033": "off",  // no-inline-html ausschalten
      "markdownlint/MD042": "off"   // alt-Attribut bei Bildern nicht erzwingen
    }
  }
];
