import React, { useMemo } from "react";
import { useCode } from "../context/CodeContext";
import { Maximize2, Minimize2 } from "lucide-react";

// Simple debounce hook helper inside this file to keep it self-contained
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

const LivePreview = ({ isExpanded, toggleExpand }) => {
  const { html, css, js } = useCode();
  
  const debouncedHtml = useDebounce(html, 600);
  const debouncedCss = useDebounce(css, 600);
  const debouncedJs = useDebounce(js, 600);

  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          /* Default Reset */
          body { margin: 0; padding: 0; box-sizing: border-box; }
          ${debouncedCss}
        </style>
      </head>
      <body>
        ${debouncedHtml}
        <script>
            try {
              ${debouncedJs}
            } catch (err) {
              console.error(err);
              document.body.innerHTML += '<div style="color:red; background:#fee; padding:10px; border:1px solid red; margin:10px;">Runtime Error: ' + err.message + '</div>';
            }
        </script>
      </body>
      </html>
    `;
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  return (
    <div className={`flex flex-col h-full bg-white ${isExpanded ? "fixed inset-0 z-[100]" : ""}`}>
      <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center justify-between flex-none h-10">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Live Output</span>
        <button 
          onClick={toggleExpand} 
          className="text-gray-600 hover:bg-gray-200 p-1 rounded"
          title={isExpanded ? "Minimize" : "Full Screen"}
        >
          {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>
      <iframe
        title="preview"
        srcDoc={srcDoc}
        className="w-full h-full border-none bg-white flex-grow"
        sandbox="allow-scripts allow-modals"
      />
    </div>
  );
};

export default LivePreview;