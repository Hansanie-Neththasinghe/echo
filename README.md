# Hansanie Neththasinghe - Developer Portfolio

A modern, interactive, and performant developer portfolio built with **React + Vite**. This project showcases professional work, skills, experience, and technical articles with a focus on clean code, accessibility, and SEO.

## 🎯 Features

### Core Features
- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **High Performance** - Optimized with lazy loading and code splitting
- 🔍 **SEO Optimized** - Meta tags, structured data, and sitemap
- ♿ **Accessible** - WCAG 2.1 compliance with keyboard navigation
- 📊 **Analytics Ready** - Integration for tracking and insights

### Sections
- **Hero/Home** - Eye-catching landing page with CTA
- **About** - Personal introduction and background
- **Skills** - Technical skills with proficiency levels
- **Experience** - Timeline of professional experience and education
- **Projects** - Filterable project showcase with demos and source code
- **Articles Hub** - Blog with search, filters, tags, and reading time
- **Contact** - Contact form and social links

### Advanced Features
- 🎨 **Animated Components** - Smooth transitions using Framer Motion
- 🔗 **Project Filtering** - Filter by technology stack
- 🏷️ **Article Tags** - Categorize and filter blog posts
- 📝 **Markdown Support** - Write content in Markdown format
- 🔄 **Reusable Components** - DRY architecture with component library
- 📦 **Code Splitting** - Automatic optimization via Vite
- 🚀 **CI/CD Pipeline** - GitHub Actions for automated testing and deployment
- 📈 **Vercel Deployment** - One-click deployment to production

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Zustand** - State management

### Development
- **ESLint** - Code quality and style
- **Prettier** - Code formatting

### Deployment
- **Vercel** - Hosting platform
- **GitHub Actions** - CI/CD automation

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/               # Page components
├── data/                # Static data and content
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles
├── config/              # Configuration files
├── App.jsx              # Root component
└── main.jsx             # Entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd developer-portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

Visit `http://localhost:3000`

## 📝 Customization

### Update Portfolio Data
Edit `src/data/portfolio.js`:
- Add your skills with proficiency levels
- Showcase your projects with demos and source code
- List your professional experience
- Add blog articles and tutorials

### Customize Appearance
- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Modify CSS imports in `src/styles/index.css`
- **Animation Speed**: Adjust timing values

### Add Resume
Place your resume PDF in the `public` folder and update the download link.

## 🔨 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run lint:fix    # Fix linting issues
npm run format      # Format code
npm run type-check  # Check TypeScript
```

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Vercel auto-deploys on push to main

### Manual Deployment

```bash
npm run build
# Deploy dist/ folder to your hosting
```

## 📄 License

Open source and available under MIT License.

## 👤 Author

**Hansanie Neththasinghe**
- 📧 Email: hansanieneththasinghe@gmail.com
- 🔗 LinkedIn: [Hansanie Neththasinghe](https://www.linkedin.com/in/hansanie-neththasinghe/)
- 🐙 GitHub: [@hansanie](https://github.com/hansanie)

---

Made with ❤️ using React + Vite

