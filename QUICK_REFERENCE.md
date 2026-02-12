# Developer Quick Reference

## Command Cheat Sheet

### Development
```bash
npm run dev           # Start dev server (http://localhost:3000)
npm run build         # Build for production
npm run preview       # Preview production build
```

### Code Quality
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
npm run format        # Format code with Prettier
npm run type-check    # Check TypeScript types
```

### File Structure Quick Map

```
src/
├── components/          → Reusable UI components
├── pages/              → Page components (routes)
├── data/               → Static content (portfolio.js)
├── hooks/              → Custom React hooks
├── utils/              → Utility functions
├── styles/             → Global CSS
├── config/             → Configuration
├── App.jsx             → Root component
└── main.jsx            → Entry point

public/
├── manifest.json       → PWA config
├── robots.txt         → SEO robots
├── sitemap.xml        → XML sitemap
└── favicon.svg        → Site icon
```

## Key Files to Edit

| To Change | File |
|-----------|------|
| **Projects/Skills/Experience** | `src/data/portfolio.js` |
| **Site Name/Email/Social** | `src/config/constants.js` |
| **Colors/Theme** | `tailwind.config.js` |
| **API Endpoints** | `.env` |
| **Deployment** | `vercel.json` |

## Common Edits

### Add a New Skill
```javascript
// In src/data/portfolio.js
{
  id: NEXT_ID,
  name: 'Skill Name',
  category: 'Category',
  icon: '🎨',
  percentage: 85,
  description: 'Your description',
}
```

### Add a New Project
```javascript
{
  id: NEXT_ID,
  title: 'Project Name',
  description: 'Short description',
  technologies: ['React', 'Node.js'],
  demoUrl: 'https://...',
  githubUrl: 'https://...',
  featured: true,
}
```

### Add Blog Article
```javascript
{
  id: NEXT_ID,
  slug: 'unique-slug',
  title: 'Article Title',
  description: 'Short description',
  category: 'React',
  tags: ['react', 'javascript'],
  date: '2024-01-15',
  readingTime: '5',
  content: 'Full article content...',
}
```

### Change Brand Color
```javascript
// In tailwind.config.js
colors: {
  primary: {
    500: '#YOUR_COLOR',
  },
}
```

## Environment Variables

```bash
# Development
VITE_API_URL=http://localhost:3001
VITE_GA_ID=G-XXXXXXXXXX

# Check .env.example for all available options
```

## Deployment Quick Steps

### Vercel (Recommended)
1. Push to GitHub: `git push origin main`
2. Go to vercel.com
3. Import repository
4. Vercel auto-deploys! ✨

### Traditional Hosting
1. `npm run build`
2. Upload `dist/` folder
3. Configure SPA routing

### Docker
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "feat: add new project"

# Push
git push origin main
```

## Performance Tips

- Keep images optimized (< 100KB each)
- Limit animations to essential interactions
- Use lazy loading for images
- Check bundle size: `npm run build`
- Monitor Lighthouse scores

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Links are keyboard accessible
- [ ] Color contrast is sufficient
- [ ] Form inputs have labels
- [ ] Heading hierarchy is correct
- [ ] Focus states are visible

## Before Deployment Checklist

- [ ] Update all portfolio data
- [ ] Run `npm run lint:fix`
- [ ] Run `npm run build`
- [ ] Run `npm run preview`
- [ ] Check Lighthouse scores
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Verify all links work
- [ ] Check performance metrics
- [ ] Update environment variables

## Package Management

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| Module not found | Delete `node_modules`, run `npm install` |
| Build fails | Run `npm run lint:fix` then build again |
| Changes not showing | Check `npm run dev` is running, refresh browser |
| CSS not applied | Check `tailwind.config.js` file pattern |

## Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com
- **Framer Motion**: https://framer.com/motion
- **React Router**: https://reactrouter.com

## Support

Check these files for help:
- `README.md` - General information
- `QUICKSTART.md` - 5-minute setup
- `SETUP.md` - Detailed guide
- `DEPLOYMENT.md` - Deployment options

## Pro Tips

💡 **Use aliases** - `@components`, `@pages`, `@hooks`, etc instead of relative paths

💡 **Keep components small** - One responsibility per component

💡 **Use the data file** - All content is in `src/data/portfolio.js`

💡 **Test often** - Use `npm run dev` frequently

💡 **Format code** - Run `npm run format` before committing

💡 **Check performance** - Run Lighthouse regularly

---

**Happy coding! 🚀**
