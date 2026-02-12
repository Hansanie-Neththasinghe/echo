# Setup and Installation Guide

Complete guide to set up your developer portfolio locally and deploy it.

## System Requirements

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (or yarn/pnpm)
- Git for version control
- A code editor (VS Code recommended)

## Local Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/hansanie/developer-portfolio.git

# Navigate to the project directory
cd developer-portfolio
```

### Step 2: Install Dependencies

```bash
# Install all dependencies
npm install

# Or if using yarn
yarn install

# Or if using pnpm
pnpm install
```

### Step 3: Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env

# Copy the development environment file (optional)
cp .env.example .env.development
```

### Step 4: Start Development Server

```bash
# Start the development server
npm run dev

# The app will open at http://localhost:3000
```

## Customization Guide

### 1. Update Portfolio Data

Edit `src/data/portfolio.js` and update:

#### Skills
```javascript
export const skills = [
  {
    id: 1,
    name: 'React',
    category: 'Frontend',
    icon: '⚛️',
    percentage: 95,
    description: 'Building interactive UIs with hooks and patterns',
  },
  // Add your skills
]
```

#### Projects
```javascript
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution',
    image: 'https://...',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://...',
    githubUrl: 'https://...',
    featured: true,
  },
  // Add your projects
]
```

#### Experience
```javascript
export const experience = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Startup Inc',
    startDate: '2022-03-01',
    endDate: null, // null means current
    description: 'Leading development of web applications',
  },
  // Add your experience
]
```

#### Articles
```javascript
export const articles = [
  {
    id: 1,
    slug: 'react-hooks-guide',
    title: 'Mastering React Hooks',
    description: 'Learn everything about React Hooks',
    category: 'React',
    tags: ['react', 'hooks', 'javascript'],
    date: '2024-01-15',
    readingTime: '8',
    content: 'Full article content here...',
  },
  // Add your articles
]
```

### 2. Update Site Information

Edit `src/config/constants.js`:

```javascript
export const config = {
  siteName: 'Your Name',
  siteUrl: 'https://yourdomain.com',
  siteDescription: 'Your professional description',
  author: 'Your Name',
  email: 'your@email.com',
  socialLinks: {
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle',
  },
}
```

### 3. Customize Branding

#### Colors
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        // ... update to your brand colors
      },
    },
  },
}
```

#### Fonts
Edit `src/styles/index.css`:

```css
/* Import your custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

### 4. Add Your Resume

```bash
# Place your resume in the public folder
cp ~/Downloads/your-resume.pdf public/resume.pdf
```

Update the link in components if needed.

### 5. Add Favicon

```bash
# Replace the favicon
# Place your favicon.svg in the public folder
cp ~/Downloads/your-favicon.svg public/favicon.svg
```

### 6. Update Navigation

The navigation is automatically generated from the `links` array in `src/components/Navbar.jsx`. Edit as needed.

## Building for Production

### Build the Project

```bash
# Create an optimized production build
npm run build

# This generates a dist/ folder with optimized files
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview

# This simulates how it will look online
```

### Check Build Size

```bash
# Check the size of your production build
ls -lh dist/

# Use a tool like Bundle Analyzer (optional)
npm install --save-dev vite-plugin-visualizer
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- --port 3001
```

### Dependencies Not Installing

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build Errors

```bash
# Make sure all dependencies are installed
npm install

# Check for any syntax errors
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Try building again
npm run build
```

### Hot Module Replacement (HMR) Not Working

```bash
# Restart the development server
# Stop current server (Ctrl+C)
npm run dev
```

## Performance Optimization

### Before Deployment

1. **Run Lighthouse Audit**
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Audit for Performance, Accessibility, Best Practices, SEO

2. **Optimize Images**
   - Compress images before adding them
   - Use modern formats (WebP)
   - Use lazy loading

3. **Check Bundle Size**
   - Review dist/ folder size
   - Aim for: < 500KB total

4. **Performance Targets**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 90+
   - SEO: 100

## Code Quality

### Run Linting

```bash
# Check for ESLint issues
npm run lint

# Fix issues automatically
npm run lint:fix
```

### Format Code

```bash
# Format with Prettier
npm run format
```

### Type Checking (Optional)

```bash
# Check TypeScript types
npm run type-check
```

## Git Workflow

### Initial Commit

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Add remote repository
git remote add origin https://github.com/yourusername/developer-portfolio.git

# Push to GitHub
git push -u origin main
```

### Regular Commits

```bash
# Check status
git status

# Add changes
git add .

# Commit with meaningful message
git commit -m "fix: update portfolio data"

# Push to remote
git push
```

## CI/CD Pipeline

The project includes GitHub Actions workflow for:
- Linting
- Type checking
- Building
- Deployment to Vercel

### Set Up Secrets

1. Go to Repository Settings → Secrets and variables → Actions
2. Add:
   - `VERCEL_TOKEN` - From [Vercel Settings](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` - From Vercel dashboard
   - `VERCEL_PROJECT_ID` - From project settings

## Deployment

### Deploy to Vercel

```bash
# Make sure everything is committed
git status

# Vercel auto-deploys on push to main
git push origin main

# Check Vercel dashboard for deployment status
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Self-Hosted Deployment

```bash
# Build the project
npm run build

# Upload dist/ folder to your server/hosting provider
# Ensure SPA routing is configured
```

## Monitoring

### Analytics

Set up Google Analytics:

1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `.env`: `VITE_GA_ID=G-XXXXXXXXXX`
4. Restart the dev server

### Error Tracking (Optional)

Set up Sentry for error tracking:

1. Create Sentry account
2. Create a project
3. Install Sentry: `npm install @sentry/react`
4. Add to your app initialization

## Maintenance

### Regular Tasks

- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update portfolio content as needed
- Monitor analytics
- Check for broken links

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

### Security Audit

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities (if possible)
npm audit fix

# Fix with breaking changes (be careful)
npm audit fix --force
```

## Support and Help

- Check [README.md](./README.md) for general information
- See [QUICKSTART.md](./QUICKSTART.md) for quick setup
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
- Check [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines

## Next Steps

1. ✅ Set up locally
2. ✅ Customize portfolio data
3. ✅ Test all features
4. ✅ Build for production
5. ✅ Deploy to Vercel
6. ✅ Set up custom domain
7. ✅ Share with the world! 🚀

Congratulations! Your portfolio is ready! 🎉
