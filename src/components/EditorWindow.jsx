import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { editorThemes } from "../utils/themes";
import { useCode } from "../context/CodeContext";

const EditorWindow = ({ language, value, onChange }) => {
  const { activeTheme } = useCode();
  const monaco = useMonaco();

  // 1. Setup Emmet and Themes once Monaco is loaded
  useEffect(() => {
    if (!monaco) return;

    // Register Emmet for HTML expansion (div -> <div></div>)
    // Note: This modifies the global Monaco instance
    emmetHTML(monaco);
    emmetCSS(monaco);

    // Register all custom themes from our utility file
    Object.keys(editorThemes).forEach((themeName) => {
      monaco.editor.defineTheme(themeName, editorThemes[themeName]);
    });

    // Apply the initial theme
    monaco.editor.setTheme(activeTheme);

    // Configure Compiler Options for Strict Error Checking (Red Lines)
    if (language === "javascript") {
      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      });
      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2015,
        allowNonTsExtensions: true,
        checkJs: true, // Crucial for red squiggles on errors
      });
    }

  }, [monaco, activeTheme, language]);

  const handleEditorChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <Editor
        height="100%"
        language={language}
        value={value}
        theme={activeTheme}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          padding: { top: 15 },
          
          // --- VS Code Features ---
          fontLigatures: true,
          formatOnPaste: true,
          formatOnType: true,
          
          // Auto Close & Rename
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          autoClosingTags: true, // Core Monaco feature
          linkedEditing: true,   // Auto-rename tag (change open tag, close tag updates)
          
          // IntelliSense
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: "on",
          tabCompletion: "on",
          
          // Errors
          renderValidationDecorations: "on",
        }}
      />
    </div>
  );
};

export default EditorWindow;