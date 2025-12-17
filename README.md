# ⚡ MasterCode IDE (Full Stack Master Series)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-646CFF.svg?style=flat&logo=vite)
![Tailwind](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC.svg?style=flat&logo=tailwindcss)
![Monaco](https://img.shields.io/badge/Editor-Monaco-1E1E1E.svg?style=flat&logo=visual-studio-code)

**MasterCode IDE** is a high-performance, client-side code editor built for the **Full Stack Developer Master Series**. It replicates the experience of VS Code in the browser, offering real-time HTML/CSS/JS compiling, advanced Emmet support, and a responsive mobile-first architecture.

---

## 🚀 Key Features

### 🖥️ **Pro-Level Editing Experience**
* **Monaco Editor Engine:** The same core that powers VS Code.
* **Emmet Support:** Type `div.container` + `TAB` → `<div class="container"></div>`.
* **IntelliSense:** Auto-complete for tags, brackets, and syntax.
* **7+ Themes:** Includes Dracula, Monokai, Nord, Synthwave, and more.

### ⚡ **Real-Time Performance**
* **Live Preview:** Instant code rendering with **debounced updates** (no flickering).
* **Error Trapping:** Runtime JS errors (e.g., `ReferenceError`) are caught and displayed instantly in the UI.
* **Infinite Loop Protection:** (Basic implementation) Prevents browser crashes.

### 📱 **Responsive & Adaptive**
* **Resizable Layout:** Drag to adjust the split between Code and Preview using `react-resizable-panels`.
* **Smart Mobile View:** Automatically switches from "3-Column Grid" to "Tabbed Interface" on mobile devices.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Core Framework** | React 18 + Vite |
| **Editor Engine** | @monaco-editor/react |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React & React Icons |
| **Layout** | React Resizable Panels |
| **Utilities** | Emmet-Monaco-ES |

---

## 📦 Installation & Setup

Clone the repository and install the dependencies to start your local dev server.

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/mastercode-ide.git](https://github.com/YOUR_USERNAME/mastercode-ide.git)

# 2. Navigate to directory
cd mastercode-ide

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev  ```bash

🎮 How to Use
Code: Write HTML, CSS, and JS in the respective panels.

Resize: Drag the blue horizontal bar to adjust the preview size.

Theme: Click the 🎨 Palette Icon in the header to switch themes (e.g., from Dark to Synthwave).

Mobile: On smaller screens, use the top tabs to switch between editors.

Full Screen: Click the "Expand" icon in the preview window to view your output in full-screen mode.
