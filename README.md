<a name="readme-top"></a>

<div align="center">
  <br />
  <img src="https://via.placeholder.com/100/007fd4/ffffff?text=IDE" alt="Logo" width="80" height="80">
  
  <h1 align="center">MasterCode IDE</h1>

  <p align="center">
    The Ultimate Browser-Based Code Editor built for the <b>Full Stack Master Series</b>.
    <br />
    <a href="#demo">View Demo</a>
    ·
    <a href="https://github.com/YOUR_USERNAME/mastercode-ide/issues">Report Bug</a>
    ·
    <a href="https://github.com/YOUR_USERNAME/mastercode-ide/pulls">Request Feature</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/last-commit/YOUR_USERNAME/mastercode-ide?style=for-the-badge&logo=github&color=007fd4" alt="Last Commit">
    <img src="https://img.shields.io/github/license/YOUR_USERNAME/mastercode-ide?style=for-the-badge&logo=open-source-initiative&color=green" alt="License">
    <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/Vite-Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  </p>
</div>

<details>
  <summary><b>📖 Table of Contents</b></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#-tech-stack">Tech Stack</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-how-to-use">How to Use</a></li>
    <li><a href="#-project-architecture">Project Architecture</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## ⚡ About The Project

**MasterCode IDE** is not just a text area—it's a comprehensive **Integrated Development Environment** running entirely in the browser. Designed to teach advanced React patterns, it features a custom-built splitting engine, sandboxed execution, and an architecture that mirrors professional tools like CodePen or StackBlitz.

![Product Screenshot](https://via.placeholder.com/800x400/1e1e1e/ffffff?text=Insert+Your+App+Screenshot+Here)

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 🛠️ Tech Stack

This project leverages the modern React ecosystem to deliver 60fps performance.

| Category | Technologies |
| :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/-React-black?style=flat&logo=react) ![Vite](https://img.shields.io/badge/-Vite-black?style=flat&logo=vite) |
| **Styling** | ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-black?style=flat&logo=tailwindcss) ![Lucide](https://img.shields.io/badge/-Lucide_Icons-black?style=flat&logo=lucide) |
| **Engine** | ![Monaco](https://img.shields.io/badge/-Monaco_Editor-black?style=flat&logo=visual-studio-code) `react-resizable-panels` |
| **State** | Context API + LocalStorage Persistence |
| **Utils** | `emmet-monaco-es` `react-hot-toast` |

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 🚀 Key Features

* **💻 Pro-Level Editing Engine**
    * Powered by the **VS Code Monaco Engine**.
    * Full **IntelliSense** (Auto-complete) for HTML, CSS, and JS.
    * **Emmet Support:** `div.container` + `TAB` auto-expands to HTML.
* **🎨 Advanced Theming System**
    * **7+ Custom Themes:** Dracula, Monokai, Synthwave, Nord, and more.
    * Dynamic syntax highlighting injection.
* **⚡ Real-Time Compiler**
    * **Live Preview:** Instant rendering with active debouncing (no flicker).
    * **Error Trapping:** Runtime JS errors catchers (Red Screen of Death simulation).
    * **Infinite Loop Protection:** Prevents browser freezes.
* **📱 Responsive Architecture**
    * **Desktop:** 3-Pane Split View (HTML/CSS/JS).
    * **Mobile:** Native Tabbed Interface (Touch optimized).
    * **Draggable Layout:** Fully resizable workspace.

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/YOUR_USERNAME/mastercode-ide.git](https://github.com/YOUR_USERNAME/mastercode-ide.git)
    ```
2.  **Install NPM packages**
    ```sh
    cd mastercode-ide
    npm install
    ```
3.  **Start the Development Server**
    ```sh
    npm run dev
    ```
<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 🎮 How to Use

The interface is designed to be intuitive for developers.

### 1. The Workspace
> **Code:** Write HTML, CSS, and JS in the respective panels. The output updates automatically after you stop typing for 500ms.

### 2. Layout Controls
> **Resize:** Hover over the **blue horizontal bar** between the code and preview. Drag up or down to adjust the viewport size.

### 3. Customization
> **Theme:** Click the 🎨 **Palette Icon** in the header. A dropdown will appear allowing you to switch between themes (e.g., *VS Dark* for contrast, *Synthwave* for neon vibes).

### 4. Mobile Mode
> **Mobile:** On screens smaller than 768px, the layout transforms. Use the top navigation tabs to switch between specific editors (HTML/CSS/JS).

### 5. Focus Mode
> **Full Screen:** Click the "Expand" icon (top-right of the preview window) to view your output in full-screen mode, hiding the code completely.

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 🧩 Project Architecture

We use a feature-based folder structure for scalability.

```bash
src/
├── components/
│   ├── EditorWindow.jsx     # Monaco wrapper with Emmet & Error config
│   ├── LivePreview.jsx      # Sandboxed Iframe with error catching
│   └── ResizableLayout.jsx  # Complex split-pane logic (Desktop vs Mobile)
├── context/
│   └── CodeContext.jsx      # Global state (Code strings, Active Theme)
├── hooks/
│   └── useDebounce.js       # Performance optimization hook
├── utils/
│   └── themes.js            # JSON definitions for 7+ themes (Dracula, etc.)
└── App.jsx                  # Main Layout & Header Composition
 ```

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>
 

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

---

## 📞 Contact

Your Name - [@YourTwitterHandle](https://twitter.com/your_handle) - your.email@example.com

Project Link: [https://github.com/YOUR_USERNAME/mastercode-ide](https://github.com/YOUR_USERNAME/mastercode-ide)

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" />
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</p>

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-007fd4?style=flat-square" alt="Back to Top">
  </a>
</p>

