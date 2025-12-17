export const editorThemes = {
  "vs-dark": { base: "vs-dark", inherit: true, rules: [], colors: {} },
  "light": { base: "vs", inherit: true, rules: [], colors: {} },
  "dracula": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6272a4", fontStyle: "italic" },
      { token: "keyword", foreground: "ff79c6" },
      { token: "identifier", foreground: "50fa7b" },
      { token: "string", foreground: "f1fa8c" },
      { token: "type", foreground: "8be9fd" },
    ],
    colors: {
      "editor.background": "#282a36",
      "editor.foreground": "#f8f8f2",
      "editorCursor.foreground": "#f8f8f0",
      "editor.lineHighlightBackground": "#44475a",
      "editorLineNumber.foreground": "#6272a4",
    },
  },
  "cobalt": {
    base: "vs-dark",
    inherit: true,
    rules: [
        { token: "keyword", foreground: "ff9d00" },
        { token: "comment", foreground: "0088ff", fontStyle: "italic" },
        { token: "string", foreground: "3ad900" }
    ],
    colors: {
      "editor.background": "#002240",
      "editor.foreground": "#FFFFFF",
      "editorLineNumber.foreground": "#0088ff",
    },
  },
  "gruvbox": {
    base: "vs-dark",
    inherit: true,
    rules: [{ token: "keyword", foreground: "fb4934" }, { token: "string", foreground: "b8bb26" }],
    colors: {
      "editor.background": "#282828",
      "editor.foreground": "#ebdbb2",
      "editorLineNumber.foreground": "#928374",
    },
  },
  "monokai": {
    base: "vs-dark",
    inherit: true,
    rules: [{ token: "keyword", foreground: "f92672" }, { token: "string", foreground: "e6db74" }],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#f8f8f2",
    },
  },
  "synthwave": {
    base: "vs-dark",
    inherit: true,
    rules: [{ token: "keyword", foreground: "ff7edb" }, { token: "string", foreground: "36f9f6" }],
    colors: {
      "editor.background": "#2b213a",
      "editor.foreground": "#ffffff",
      "editor.lineHighlightBackground": "#34294f",
    },
  },
  "nord": {
    base: "vs-dark",
    inherit: true,
    rules: [{ token: "keyword", foreground: "81A1C1" }, { token: "string", foreground: "A3BE8C" }],
    colors: {
      "editor.background": "#2E3440",
      "editor.foreground": "#D8DEE9",
    },
  },
};