# Tshepiso Letelo - Personal Developer Portfolio

A clean, responsive, multi-page portfolio website built for **Tshepiso Letelo**, a second-year ICT/DICT student and aspiring software developer.

This website is tailored for applying to **student internships, graduate programmes, ICT work-integrated learning opportunities, and junior software developer roles**.

---

## 📁 File Structure

```text
portfolio/
├── index.html           # Home page with hero, key stats & featured teasers
├── about.html           # Detailed background, career goal & 5 core highlight cards
├── skills.html          # Technical skills with animated progress bars & learning stages
├── projects.html       # 4 featured projects with category filter buttons (All/Web/Java/Database)
├── contact.html         # Contact details & interactive form with validation
├── css/
│   └── style.css        # Single shared stylesheet (dark navy theme with cyan accent)
├── js/
│   └── script.js        # Single shared script (vanilla JavaScript ES6+)
├── images/
│   ├── profile.jpg      # Profile photo (with SVG fallback)
│   ├── profile.svg      # Profile vector illustration
│   ├── project1.jpg     # Student Society Membership System preview
│   ├── project1.svg     # Project 1 vector mockup
│   ├── project2.jpg     # Bus Tracking System preview
│   ├── project2.svg     # Project 2 vector mockup
│   ├── project3.jpg     # University Fee Calculator preview
│   ├── project3.svg     # Project 3 vector mockup
│   ├── project4.jpg     # Student Management System preview
│   └── project4.svg     # Project 4 vector mockup
└── README.md            # Documentation & personalization guide
```

---

## 🚀 How to Run the Website

### Method 1: Open Directly in Any Browser (Zero Setup)
Because this project uses pure HTML5, CSS3, and vanilla JavaScript without any build steps or frameworks:
1. Double-click `index.html` (or right-click → **Open With** → Google Chrome, Microsoft Edge, Firefox, or Safari).
2. The entire site will function immediately with all page links working.

### Method 2: Using VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. If you have the "Live Server" extension installed, right-click `index.html` and click **"Open with Live Server"**.
3. It will open at `http://127.0.0.1:5500/index.html`.

### Method 3: Using Node.js / Vite
If running in this development environment:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🎨 How to Change the Accent Colour

The design system is managed with CSS Custom Properties in `css/style.css`. To change the accent colour across the entire website:

1. Open `css/style.css`.
2. Locate the `:root` block at lines ~15–25:
   ```css
   :root {
     /* Default: Electric Cyan / Teal */
     --accent: #00d2c4;
     --accent-hover: #2ee6d9;
     --accent-muted: rgba(0, 210, 196, 0.12);
     --accent-glow: rgba(0, 210, 196, 0.3);
     --accent-border: rgba(0, 210, 196, 0.25);
   }
   ```
3. To switch to **Electric Blue**:
   ```css
   --accent: #3b82f6;
   --accent-hover: #60a5fa;
   --accent-muted: rgba(59, 130, 246, 0.12);
   --accent-glow: rgba(59, 130, 246, 0.35);
   --accent-border: rgba(59, 130, 246, 0.25);
   ```
4. Save the file. Every button, active nav link, tag hover state, progress bar, and glow will automatically update!

---

## 🖼️ How to Replace Images

The `images/` directory includes built-in placeholder graphics so there are never any broken-image icons.

1. **Profile Photo**:
   - Save your headshot as `profile.jpg` into the `images/` folder (replacing `images/profile.jpg`).
   - Recommended dimensions: 600×600 pixels or 1:1 aspect ratio.

2. **Project Screenshots**:
   - Save screenshots of your applications as:
     - `images/project1.jpg` (Student Society Membership System)
     - `images/project2.jpg` (Bus Tracking System)
     - `images/project3.jpg` (University Fee Calculator)
     - `images/project4.jpg` (Student Management System)
   - Recommended dimensions: 800×450 pixels (16:9 widescreen ratio).

---

## 🔗 How to Edit Project Links & Details

All project data is stored in **one single array** inside `js/script.js` (around line 180):

```javascript
const projectsData = [
  {
    id: 1,
    title: 'Student Society Membership System',
    description: '...',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    category: ['web', 'database'],
    image: 'images/project1.jpg',
    imageAlt: '...',
    // REPLACE THESE LINKS:
    demoUrl: 'https://your-live-demo-link.com',   // Live demo or read-more link
    githubUrl: 'https://github.com/tshepisoletelo/society-membership-system' // Your GitHub repo
  },
  // ... other projects ...
];
```

Replace the `#` values with your real URLs. The cards and links will automatically update when the page is loaded.

---

## ✉️ How to Connect a Real Contact Form (Free Options)

The current contact form includes complete client-side JavaScript validation (checking for required fields, valid email format, and messages of at least 10 characters).

Because this is a static site without a backend server, you can connect a free third-party form handler in under 2 minutes:

### Option A: Using Formspree (Recommended & Easiest)
1. Go to [Formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your Form ID (e.g., `xpznkloa`).
3. Open `contact.html` and locate the `<form id="contactForm">` tag.
4. Add the `action` and `method` attributes:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. In `js/script.js`, inside `initContactForm()`, after validation passes, remove `e.preventDefault()` or allow standard submission:
   ```javascript
   form.submit();
   ```

### Option B: Using Web3Forms (No Registration Required)
1. Visit [Web3Forms.com](https://web3forms.com) and enter your email `tshepisoletelo2@gmail.com` to receive an Access Key.
2. In `contact.html`, inside `<form id="contactForm" action="https://api.web3forms.com/submit" method="POST">`, add:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```

---

## 🌐 How to Deploy for Free

### Option 1: GitHub Pages
1. Create a new repository on GitHub (e.g. `portfolio` or `tshepisoletelo.github.io`).
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository, click **Settings** → **Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your portfolio will be live at `https://YOUR_USERNAME.github.io/portfolio/` within 60 seconds!

### Option 2: Netlify (Drag & Drop)
1. Go to [Netlify.com](https://www.netlify.com) and sign in.
2. Click **Add new site** → **Deploy manually**.
3. Drag and drop the `portfolio/` folder directly onto the upload area.
4. Netlify will deploy your site instantly and provide a custom live URL (e.g., `https://tshepiso-letelo.netlify.app`).

---

## 📋 Personalisation Checklist

Before sending your portfolio to recruiters or hiring managers:

- [ ] **Profile Picture**: Put your picture into `images/profile.jpg`.
- [ ] **GitHub Profile**: Search for `href="#"` in the header/footer of each HTML file and replace with your actual GitHub URL (e.g. `https://github.com/tshepisoletelo`).
- [ ] **LinkedIn Profile**: Replace the LinkedIn placeholders with your LinkedIn profile link.
- [ ] **Project Repositories**: Open `js/script.js` and paste your GitHub links for each of the 4 projects.
- [ ] **Project Screenshots**: Capture real screenshots of your systems in action and save them to `images/project1.jpg` through `project4.jpg`.
- [ ] **Skill Percentages**: If you want to adjust any skill levels or stages as you advance through Year 2, update the numbers in `skills.html`.
- [ ] **Connect Contact Form**: Hook up Formspree or Web3Forms to receive form notifications directly in your inbox.
