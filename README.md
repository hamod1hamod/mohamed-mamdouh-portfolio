# Mohamed Mamdouh Mohib - Engineering Portfolio

Portfolio website for **Mohamed Mamdouh Mohib**, Communication & Electronics Engineering Student specializing in **Programming**, **Industrial Intelligence**, and **Cybersecurity**.

## 🚀 Key Features

- **Project Showcase**:
  - Live demo links and source code repositories for each project.
  - Comprehensive engineering descriptions, architecture highlights, and tech stacks.
  - Category filtering: *Industrial Intelligence*, *Cybersecurity*, *Communication & Electronics*.
  - Real-time search by project name, description, or tech stack (e.g., YOLO, PyTorch, C++, SCADA).
- **Interactive UI & Dark Tech Aesthetic**:
  - Cyber/Industrial electronics theme with glowing accents and responsive grid layout.
  - Native HTML5 `<dialog>` modal with backdrop blur for project architectural deep-dives.
  - Interactive "Add / Edit Project" modal to add new projects with instant live preview.
  - JSON export button for quick backup of added projects.
- **Direct Contact Integrations**:
  - **WhatsApp Direct Connect**: Click-to-chat links with pre-composed messages for `+201098641398` (`https://wa.me/201098641398`).
  - **Instagram Direct Connect**: Profile link to [`@muhammad_mamdou7`](https://www.instagram.com/muhammad_mamdou7?psln=MW44ZTdmd2xsOWNkeA%3D%3D&utm_source=qr).
  - Floating WhatsApp action button and one-click phone copy.

---

## 📁 Project Structure

```
mohamed-mamdouh-portfolio/
├── index.html          # Main semantic HTML structure & layout
├── style.css           # Modern dark-tech styles, responsive grid, animations
├── projects.data.js    # Easy-to-edit JavaScript file containing projects & profile data
├── app.js              # Filtering, search, modals, WhatsApp composer, and interactions
└── README.md           # Documentation & deployment guide
```

---

## 🛠️ How to Customize Your Projects

You can edit your projects directly in `projects.data.js`:

```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  tagline: "Short 1-sentence summary",
  category: "industrial-ai", // or "cybersecurity" or "electronics"
  categoryLabel: "Industrial Intelligence",
  badge: "Featured",
  liveUrl: "https://your-live-demo-link.com", // <-- PUT YOUR LIVE LINK HERE
  githubUrl: "https://github.com/your-username/your-repo",
  image: "https://images.unsplash.com/...",
  description: "Comprehensive description of what you engineered...",
  highlights: [
    "Key achievement 1",
    "Key achievement 2"
  ],
  techStack: ["Python", "C++", "PyTorch", "Docker"]
}
```

Or simply click the **"Add / Customize Project"** button directly in the running web interface!

---

## 🌐 How to Preview Locally

Run a simple local web server:

```bash
cd /home/hamo/.gemini/antigravity/scratch/mohamed-mamdouh-portfolio
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

---

## 🚢 Deploy for Free

### Option 1: GitHub Pages (Recommended)
1. Push this folder to a GitHub repository named `portfolio` or `<your-username>.github.io`.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your portfolio will be live at `https://<your-username>.github.io/portfolio`!

### Option 2: Vercel or Netlify
1. Drag and drop this folder directly onto [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. It deploys automatically in seconds with a free `.vercel.app` or `.netlify.app` domain.
