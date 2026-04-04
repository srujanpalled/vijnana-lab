# 🔬 Vijnana Lab

**Vijnana Lab** is a next-generation virtual science laboratory tailored for Pre-University (Class 11 & 12) students across CBSE, ICSE, and Karnataka PUC boards. It transforms traditional science practical learning through immersive 3D simulations and context-aware artificial intelligence.

## ✨ Key Features

- **🌐 Interactive 3D Modals:** Fully functional WebGL-based laboratory experiments built in React Three Fiber (e.g., Vernier Calipers, Spherometer, Prism).
- **🧠 Floating AI Tutor:** A globally accessible, draggable AI widget powered by Gemini 2.0 Flash. It detects exactly which lab experiment you have open and anchors its guidance to that specific syllabus.
- **⚡ Real-Time Context:** When viewing a lab, the AI instantly knows the aim, theory, procedure, formulas, and common viva questions for that exact module.
- **🎨 Glassmorphic Premium Design:** A highly responsive, animated, and modern aesthetic powered by Tailwind CSS and Framer Motion. 

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **3D Graphics:** Three.js, React Three Fiber (@react-three/fiber), Drei
- **Artificial Intelligence:** `@google/genai` (Gemini 2.0 Flash)
- **Styling:** Tailwind CSS, Lucide React Icons
- **Animation:** Framer Motion
- **Routing:** React Router DOM

## 🚀 Run Locally

**Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/srujanpalled/vijnana-lab.git
   cd vijnana-lab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a new file named `.env.local` in the root of the project and add your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser to [http://localhost:3000](http://localhost:3000) to view the application!

## 🤝 Contribution (Hackolympic)
This codebase is part of the `vijnana_lab_hackolympic-` submission. All features, UI upgrades, and 3D implementations are designed to elevate digital education accessibility!
