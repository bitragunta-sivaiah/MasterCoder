import React from "react";
import { CodeProvider, useCode } from "./context/CodeContext";
import ResizableLayout from "./components/ResizableLayout";
import { Toaster, toast } from "react-hot-toast";
import { Code2, Palette } from "lucide-react";
import { editorThemes } from "./utils/themes";

const ThemeSelector = () => {
  const { activeTheme, setActiveTheme } = useCode();
  
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-[#333] transition">
        <Palette size={16} />
        <span className="text-sm capitalize">{activeTheme}</span>
      </button>
      
      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-0 w-48 bg-[#252526] border border-[#333] rounded-md shadow-xl overflow-hidden hidden group-hover:block z-50">
        {Object.keys(editorThemes).map((theme) => (
          <button
            key={theme}
            onClick={() => {
              setActiveTheme(theme);
              toast.success(`Theme set to ${theme}`);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#007fd4] hover:text-white transition
              ${activeTheme === theme ? "bg-[#007fd4] text-white" : "text-gray-300"}
            `}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="h-14 bg-[#181818] border-b border-[#2b2b2b] flex items-center justify-between px-6 flex-none">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-1.5 rounded-lg">
           <Code2 className="text-white w-5 h-5" />
        </div>
        <h1 className="text-gray-100 font-bold tracking-tight text-lg">
          Master<span className="text-blue-500">Coder</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeSelector />
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-1.5 rounded transition shadow-lg shadow-blue-900/20">
            Sign In
        </button>
      </div>
    </header>
  );
};

export default function App() {
  return (
    <CodeProvider>
      <div className="h-screen w-screen flex flex-col bg-[#0f0f0f] text-white overflow-hidden">
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
        <Header />
        <div className="flex-grow min-h-0">
          <ResizableLayout />
        </div>
      </div>
    </CodeProvider>
  );
}