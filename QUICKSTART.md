# Quick Start Guide

Welcome! This guide will help you get started with your new developer portfolio.

## 5-Minute Setup

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd developer-portfolio
npm install
```

### 2. Update Your Information
Edit `src/data/portfolio.js`:
- Update the `skills` array with your technical skills
- Add your projects to the `projects` array
- List your experience in the `experience` array
- Add blog articles in the `articles` array

### 3. Customize Branding
- Edit `tailwind.config.js` to change colors
- Update `src/config/constants.js` with your details
- Replace favicon in `public/favicon.svg`
- Add your resume as `public/resume.pdf`

### 4. Start Development
```bash
npm run dev
```

Visit `http://localhost:3000`

## Key Files to Edit

| File | What to Edit |
|------|-------------|
| `src/data/portfolio.js` | Your projects, skills, experience, articles |
| `src/config/constants.js` | Site name, description, social links |
| `tailwind.config.js` | Colors, fonts, styling |
| `.env` | API endpoints and configuration |
| `vercel.json` | Deployment configuration |

## Common Tasks

### Add a New Skill
```javascript
// In src/data/portfolio.js
export const skills = [
  {
    id: 10,
    name: 'Your Skill',
    category: 'Category',
    icon: '🎨',
    percentage: 85,
    description: 'Your description',
  },
  // ... rest of skills
]
```

### Add a New Project
```javascript
export const projects = [
  {
    id: 7,
    title: 'Project Name',
    description: 'Brief description',
    image: 'https://...',
    technologies: ['React', 'Node.js'],
    demoUrl: 'https://...',
    githubUrl: 'https://...',
  },
  // ... rest of projects
]
```

### Add a Blog Article
```javascript
export const articles = [
  {
    id: 7,
    slug: 'unique-article-slug',
    title: 'Article Title',
    description: 'Brief description',
    category: 'React',
    tags: ['react', 'javascript'],
    date: '2024-01-15',
    readingTime: '5',
    content: 'Full article content...',
  },
  // ... rest of articles
]
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... other shades
      },
    },
  },
}
```

### Add Social Links
Update `src/config/constants.js`:
```javascript
export const config = {
  socialLinks: {
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle',
  },
}
```

## Before Going Live

### Checklist:
- [ ] Update all portfolio data in `src/data/portfolio.js`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Check colors and branding in `tailwind.config.js`
- [ ] Update site info in `src/config/constants.js`
- [ ] Test all pages: `npm run dev`
- [ ] Run linting: `npm run lint:fix`
- [ ] Build project: `npm run build`
- [ ] Test build: `npm run preview`
- [ ] Add Vercel secrets for CI/CD
- [ ] Push to GitHub and verify deployment

## Deployment

### Quick Deploy to Vercel:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Import your repository
   - Vercel will auto-deploy

3. **Set Up Custom Domain**
   - In Vercel dashboard, add your domain
   - Update DNS records with your registrar

For detailed deployment options, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Project Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Build for production
npm run preview       # Preview production build

# Code Quality
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
npm run format        # Format code
npm run type-check    # Check types

# Production
npm run build && npm run preview
```

## Folder Structure Quick Reference

```
📁 src/
├── 📁 components/      ← Reusable UI components
├── 📁 pages/          ← Page components
├── 📁 data/           ← Portfolio content (EDIT THIS)
├── 📁 hooks/          ← Custom React hooks
├── 📁 utils/          ← Utility functions
├── 📁 styles/         ← Global CSS
├── 📁 config/         ← Configuration
├── App.jsx            ← Main app component
└── main.jsx           ← Entry point
```

## Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## Getting Help

- Check the [README.md](./README.md) for detailed documentation
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines
- Open an issue on GitHub for bugs
- Review the code comments for implementation details

## Next Steps

1. ✅ Customize your portfolio data
2. ✅ Test locally with `npm run dev`
3. ✅ Deploy to Vercel
4. ✅ Set up custom domain
5. ✅ Share with the world! 🎉

Good luck with your portfolio! 🚀
