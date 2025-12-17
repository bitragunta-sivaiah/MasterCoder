import React, { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const useCode = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [html, setHtml] = useState(`<div class="card">
  <h1>Welcome</h1>
  <p>Type h1 and press TAB!</p>
</div>`);
  
  const [css, setCss] = useState(`body {
  background: #1e1e1e;
  color: #fff;
  display: grid;
  place-items: center;
  height: 100vh;
}
.card {
  padding: 2rem;
  background: #333;
  border-radius: 8px;
}`);
  
  const [js, setJs] = useState(`// Type an error to see the red line
const x = 10;
console.log(x);`);

  // Default theme
  const [activeTheme, setActiveTheme] = useState("dracula");

  return (
    <CodeContext.Provider value={{ 
      html, setHtml, 
      css, setCss, 
      js, setJs, 
      activeTheme, setActiveTheme 
    }}>
      {children}
    </CodeContext.Provider>
  );
};