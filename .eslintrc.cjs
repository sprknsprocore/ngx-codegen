/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended"
  ],
  settings: {
    tailwindcss: {
      callees: ["clsx", "ctl", "cva"],
      config: "tailwind.config.ts"
    }
  },
  rules: {
    // Forbid raw color literals in TS/TSX
    "no-restricted-syntax": [
      "error",
      {
        selector: "Literal[value=/#[0-9A-Fa-f]{3,6}\\b/]",
        message: "Hex colors are forbidden. Use tokenized Tailwind classes or CSS variables."
      },
      {
        selector: "Literal[value=/\\brgb(a)?\\(|\\bhsl(a)?\\(/]",
        message: "Raw rgb/hsl colors are forbidden. Use tokenized Tailwind classes or CSS variables."
      }
    ],
    // Tailwind plugin defaults already warn on arbitrary values; treat as errors in CI
    "tailwindcss/no-custom-classname": "off"
  },
  overrides: [
    {
      files: ["**/*.js"],
      parser: "espree"
    }
  ]
};


