# Deployment Guide

This guide explains how to deploy the portfolio to various platforms.

## Vercel (Recommended)

Vercel is the easiest way to deploy your Vite app. It automatically detects the framework and builds the project.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add your environment variables
   - Example: `VITE_API_URL=https://api.example.com`

4. **Deploy**
   - Vercel will automatically deploy on push to main
   - Use the `.github/workflows/ci-cd.yml` for CI/CD automation

### Set Up CI/CD with Vercel

Add these secrets to your GitHub repository:

1. Go to Repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VERCEL_TOKEN` - From [Vercel Settings](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` - From Vercel dashboard
   - `VERCEL_PROJECT_ID` - From project settings

## Netlify

### Steps:

1. **Connect to Netlify**
   - Go to [netlify.com](https://www.netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy**
   - Netlify automatically deploys on push

## GitHub Pages

### Steps:

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // If deploying to username.github.io/repository-name
   })
   ```

2. **Edit package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && git add dist && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to Repository Settings → Pages
   - Select `gh-pages` as source

## Traditional Hosting

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the dist folder**
   - Upload the contents of the `dist` folder to your hosting provider
   - Ensure your server is configured for SPA routing

3. **Configure redirects** (if needed)
   - For SPA routing, configure your server to redirect all 404s to `index.html`

### Nginx Configuration Example:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache Configuration Example:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Docker Deployment

### Dockerfile:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and deploy:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Domain Configuration

### Pointing your domain:
1. Purchase a domain from a registrar
2. Update DNS records:
   - For Vercel: Add CNAME record pointing to your Vercel URL
   - For Netlify: Similar CNAME configuration
   - Check your provider's documentation for exact steps

### SSL/TLS:
- Most platforms (Vercel, Netlify) provide free SSL
- DNS is automatically managed

## Performance Optimization

### Before Deploying:

1. **Optimize images**
   ```bash
   npm run build
   # Check dist folder for image sizes
   ```

2. **Run Lighthouse audit**
   - Use Chrome DevTools Lighthouse
   - Target scores: Performance 90+, Accessibility 95+, Best Practices 90+, SEO 100

3. **Check bundle size**
   ```bash
   npm run build
   # Review dist folder size
   ```

## Monitoring

- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - Add to `config/constants.js`
- **Sentry** - Error tracking (optional)

## Troubleshooting

### Build fails:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Route issues:
- Ensure your host is configured for SPA routing
- Check `vite.config.js` base path configuration

### Environment variables not loading:
- Prefix with `VITE_` (required by Vite)
- Restart server after changing `.env`

## Support

For specific deployment issues, check your hosting provider's documentation or file an issue.
