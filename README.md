# Bansi Jethava — Personal Portfolio Website

A personal portfolio website for **Bansi Jethava**, a Diploma Computer Engineering student at **AVPTI GTU College, Rajkot, Gujarat, India**.

Built with a light-theme aesthetic, typography-first editorial layout, accessibility (WCAG 2.2 AA compliant), technical SEO, and 100% truthful, beginner-friendly content.

---

## 🌟 Verified Student Information

- **Full Name:** Bansi Jethava
- **Program:** Diploma in Computer Engineering
- **College:** AVPTI GTU College, Rajkot, Gujarat (Affiliated with GTU)
- **Current Semester:** 3rd Semester
- **Active Programming Foundation:** C Programming
- **Area of Exploration:** Web Development
- **LinkedIn:** [https://www.linkedin.com/in/bansi-jethava-b529973a8/](https://www.linkedin.com/in/bansi-jethava-b529973a8/)
- **Email:** [bansijethava143@gmail.com](mailto:bansijethava143@gmail.com)

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components by default)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom palette: Navy `#243B65`, Light Slate `#DCE6F2`, Background `#F8FAFC`, Surface `#FFFFFF`, Text `#111827`)
- **Typography:** Inter (via `next/font/google` with zero layout shift)
- **Icons:** Lucide React & Optimized SVGs
- **SEO:** Next.js Metadata API, `robots.ts`, `sitemap.ts`, Schema.org Person JSON-LD

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+ (Tested on Node v22.19.0)
- npm or pnpm

### Installation
```bash
# Clone or navigate to the directory
cd PortfolioForHer

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Test
```bash
# Compile and optimize for production
npm run build

# Start the production server
npm run start
```

---

## 🖼️ How to Add Bansi's Portrait Photo

When Bansi's portrait photograph is ready:
1. Save the image file as:
   ```
   public/images/bansi-portrait.jpg
   ```
2. The website will automatically render the portrait in the hero section with optimized sizing and smooth object-fit.
3. Until the image is placed, the site gracefully renders an elegant, designed student identity card with her initials (`BJ`), verified college affiliation, and current focus badge without any layout shift or broken image icon.

---

## 📁 How to Add Real Projects

When Bansi completes her first software or web projects, open:
`lib/portfolio-data.ts`

Add project entries to the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "student-record-system",
    title: "Student Record Management System",
    description: "A procedural C program implementing binary file storage, struct records, and search algorithms for student data.",
    technologies: ["C", "File I/O", "Algorithms"],
    githubUrl: "https://github.com/...", // Optional
    liveUrl: "https://...",             // Optional
    learnings: [
      "Dynamic memory allocation and pointer management",
      "Persistent binary file handling",
      "Modular functional decomposition in C"
    ]
  }
];
```

The Projects section will immediately transition from the "Good things are being built" state into interactive project cards!

---

## 🌐 Deploying to Production

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com).
3. Import the repository.
4. Set the environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com` (e.g. `https://bansijethava.com`)
5. Click **Deploy**.

### Deploying to Netlify
1. Connect repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## ♿ Accessibility & SEO Compliance

- **WCAG 2.2 AA Contrast:** All text passes 4.5:1 (normal text) and 3:1 (large text) contrast ratios against backgrounds.
- **Keyboard Navigation:** Full focus trap prevention, visible outline indicators, skip-to-content anchor, and Escape-key mobile menu closure.
- **Search Optimization:** Unique metadata, OpenGraph tags, dynamic sitemap, compliant `robots.txt`, and valid Schema.org structured data.

