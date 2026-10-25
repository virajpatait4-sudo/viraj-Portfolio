# Viraj Rajkumar Patait — Engineering Portfolio & Architecture

A bespoke, production-grade personal portfolio engineered for **Viraj Rajkumar Patait**, Computer Science (Data Science) undergraduate at **Vellore Institute of Technology (VIT Vellore)**.

This portfolio is built to showcase end-to-end expertise across **Data Science, Machine Learning, Business Intelligence & Relational Analytics, and Full-Stack Web Development**.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (custom dark cyber aesthetic: deep navy `#05070d`, electric purple `#8b5cf6`, cyan `#06b6d4`, subtle glassmorphism)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Visuals:** Interactive HTML5 Canvas Constellation & Neural Network Graph, Dynamic SVG Project Previews
- **Interactivity:** Canvas Confetti on downloads & messages, animated modals, active scroll-spy navigation

---

## 📁 Source of Truth: Verified Resume Mapping

All details strictly reflect Viraj's authentic academic and project records with **zero fabrication**:

| Section | Resume Data Reflected |
| :--- | :--- |
| **Hero** | Legal Name: *Viraj Rajkumar Patait*, VIT Vellore, Current CGPA **8.75/10**, Summer/Fall Internship seeker |
| **Projects** | 1. **E-Commerce Sales & Customer Analytics Dashboard** (Power BI, MySQL, DAX, Star Schema)<br>2. **Food Delivery Time Prediction** (Python, Scikit-learn, Random Forest Regressor, Linear Regression)<br>3. **UK Road Accident Severity Prediction** (Python, STATS19 Dataset, Random Forest, Decision Tree)<br>4. **Personal Portfolio Website** (React, TypeScript, Tailwind, Responsive Architecture) |
| **Skills** | Programming (Python, Java, C, C++, JavaScript, R, SQL), Databases (MySQL, DAX), Tools (Git, VS Code, Power BI, Excel), Core DSA |
| **Experience** | Selected Operations Volunteer for VIT's flagship festivals: **Gravitas** (International Tech Fest) & **Riviera** (Cultural Fest), Halls & Refreshment Team |
| **Education** | **B.Tech Computer Science (Data Science)** @ VIT Vellore (Jul 2024 – May 2028, **8.75 CGPA**), Class XII @ New Times International (**82%**), Class X @ St. Arnold's Central School (**91.5%**) |
| **Certifications** | **Udemy:** Artificial Intelligence and Machine Learning in Business<br>**Google Cloud Skill Badges (2025):** Responsible AI, Large Language Models, Generative AI |
| **Contact** | Email: `virajpatait4@gmail.com`<br>LinkedIn: `linkedin.com/in/viraj-patait-067a9b22b`<br>GitHub: `github.com/virajpatait4-sudo` |
| **Resume PDF** | Direct functional download from `public/Viraj_Rajkumar_Patait_Resume.pdf` (derived from uploaded resume) |

---

## 🛠️ Local Development & Running

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm (v9+ or v10+)

Node.js portable is already configured in `C:\Users\Viraj Patait\.gemini\antigravity\scratch\tools\node` and added to User PATH.

### 1. Navigate to Project
```bash
cd "C:\Users\Viraj Patait\.gemini\antigravity\scratch\viraj-portfolio"
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run preview
```
The preview will start at [http://localhost:4173](http://localhost:4173).

---

## 🌐 Deployment Options

### Option A: Vercel (Recommended — 1-Click)
1. Push this directory to your GitHub account (`github.com/virajpatait4-sudo/portfolio`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Framework preset will automatically detect **Vite**.
4. Click **Deploy**.

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop), or link via GitHub.
3. Build command: `npm run build`, Publish directory: `dist`.

### Option C: GitHub Pages
1. In `vite.config.ts`, add `base: '/portfolio/'` (matching your repo name).
2. Run `npm run build` and publish the `dist` branch via `gh-pages`.

---

## ✏️ How to Update Your Information

All personal details, projects, skills, education, and links are decoupled into a single configuration file:
- **`src/data/portfolioData.ts`**

To update your projects, CGPA, or add new certifications, simply edit that file—all UI sections, modals, and filters will update automatically!

---

## 📝 Remaining Optional Customizations for You

1. **Individual Project Repositories:**
   Currently, all project code buttons link to your primary verified GitHub profile (`https://github.com/virajpatait4-sudo`). If you create dedicated repositories for the E-Commerce Dashboard, Food Delivery Model, or UK Accident Severity project, update the `githubUrl` field in `src/data/portfolioData.ts`.
2. **Live Interactive Demos (Optional):**
   If you publish your Power BI report to Power BI Service or host an interactive Streamlit/Gradio app for the ML models, you can populate the `liveUrl` field on each project card.
3. **Custom Domain:**
   If you purchase a custom domain like `virajpatait.dev`, link it in your Vercel or Netlify DNS settings.
