import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import EditorWindow from "./EditorWindow";
import LivePreview from "./LivePreview";
import { useCode } from "../context/CodeContext";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import clsx from "clsx";

const ResizableLayout = () => {
  // We use activeTab state specifically for the Mobile View
  const { html, setHtml, css, setCss, js, setJs } = useCode();
  const [activeMobileTab, setActiveMobileTab] = useState("html");
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (isFullScreen) {
    return <LivePreview isExpanded={true} toggleExpand={() => setIsFullScreen(false)} />;
  }

  // --- Helper Components for Mobile Tabs ---
  const MobileTabButton = ({ id, icon: Icon, label, color }) => (
    <button
      onClick={() => setActiveMobileTab(id)}
      className={clsx(
        "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors",
        activeMobileTab === id
          ? `border-${color} text-gray-100 bg-[#1e1e1e]`
          : "border-transparent text-gray-500 hover:text-gray-300 bg-[#141414]"
      )}
    >
      <Icon className={activeMobileTab === id ? `text-${color}` : ""} />
      {label}
    </button>
  );

  return (
    <PanelGroup direction="vertical" className="h-full w-full bg-[#1e1e1e]">
      
      {/* ------------------------------------------------------------
        SECTION 1: MOBILE TAB HEADER (Visible only on Mobile)
        ------------------------------------------------------------
      */}
      <div className="flex md:hidden border-b border-[#333] bg-[#141414]">
        <MobileTabButton id="html" icon={FaHtml5} label="HTML" color="orange-500" />
        <MobileTabButton id="css" icon={FaCss3Alt} label="CSS" color="blue-500" />
        <MobileTabButton id="js" icon={FaJs} label="JS" color="yellow-400" />
      </div>

      {/* ------------------------------------------------------------
        SECTION 2: EDITORS PANEL (60% Height)
        ------------------------------------------------------------
      */}
      <Panel defaultSize={60} minSize={20} className="flex flex-col md:flex-row">
        
        {/* === MOBILE VIEW: Only render the Active Tab === */}
        <div className="md:hidden h-full w-full">
            {activeMobileTab === 'html' && (
                <EditorWindow language="html" value={html} onChange={setHtml} />
            )}
            {activeMobileTab === 'css' && (
                <EditorWindow language="css" value={css} onChange={setCss} />
            )}
            {activeMobileTab === 'js' && (
                <EditorWindow language="javascript" value={js} onChange={setJs} />
            )}
        </div>

        {/* === DESKTOP VIEW: Render All 3 Side-by-Side === */}
        {/* HTML Column */}
        <div className="hidden md:flex flex-1 flex-col border-r border-[#333] min-w-0">
          <div className="h-9 bg-[#252526] flex items-center px-3 border-b border-[#1e1e1e] border-t-2 border-t-orange-500">
            <FaHtml5 className="text-orange-500 mr-2" />
            <span className="text-gray-300 text-xs font-bold">HTML</span>
          </div>
          <EditorWindow language="html" value={html} onChange={setHtml} />
        </div>

        {/* CSS Column */}
        <div className="hidden md:flex flex-1 flex-col border-r border-[#333] min-w-0">
          <div className="h-9 bg-[#252526] flex items-center px-3 border-b border-[#1e1e1e] border-t-2 border-t-blue-500">
            <FaCss3Alt className="text-blue-500 mr-2" />
            <span className="text-gray-300 text-xs font-bold">CSS</span>
          </div>
          <EditorWindow language="css" value={css} onChange={setCss} />
        </div>

        {/* JS Column */}
        <div className="hidden md:flex flex-1 flex-col min-w-0">
          <div className="h-9 bg-[#252526] flex items-center px-3 border-b border-[#1e1e1e] border-t-2 border-t-yellow-400">
            <FaJs className="text-yellow-400 mr-2" />
            <span className="text-gray-300 text-xs font-bold">JS</span>
          </div>
          <EditorWindow language="javascript" value={js} onChange={setJs} />
        </div>

      </Panel>

      {/* Resize Handle (Dragger) */}
      <PanelResizeHandle className="h-2 bg-[#007fd4] hover:bg-[#0060a0] transition-colors cursor-row-resize flex items-center justify-center z-50">
         <div className="w-16 h-1 bg-white/30 rounded-full" />
      </PanelResizeHandle>

      {/* ------------------------------------------------------------
        SECTION 3: PREVIEW PANEL (40% Height)
        ------------------------------------------------------------
      */}
      <Panel defaultSize={40} minSize={10}>
        <LivePreview isExpanded={false} toggleExpand={() => setIsFullScreen(true)} />
      </Panel>

    </PanelGroup>
  );
};

export default ResizableLayout;