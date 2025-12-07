# Deploy to Cloudflare Pages

This guide will help you deploy your Great Green Wall of Africa website to Cloudflare Pages for **free, lifetime hosting**.

## ✅ Prerequisites Complete

Your project is already configured for static export:
- ✅ `next.config.mjs` has `output: 'export'`
- ✅ Images are set to `unoptimized: true`
- ✅ Trailing slashes enabled for static hosting

## 🚀 Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Cloudflare Pages deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Click **Connect to Git**
   - Select your GitHub repository

3. **Configure Build Settings**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `18` or higher

4. **Deploy**
   - Click **Save and Deploy**
   - Your site will be live in ~2 minutes at `https://your-project.pages.dev`

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build your site**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy out --project-name=ggw-africa
   ```

## 📦 What Gets Deployed

The build process creates a static site in the `out` directory with:
- All HTML pages
- CSS and JavaScript bundles
- Images and assets
- Video files

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your Pages project in Cloudflare
2. Navigate to **Custom domains**
3. Add your domain (e.g., `ggwoa.org`)
4. Update your DNS settings as instructed

## 💰 Cloudflare Pages Free Tier Limits

- ✅ **Unlimited bandwidth**
- ✅ **Unlimited requests**
- ✅ **500 builds per month**
- ✅ **1 concurrent build**
- ✅ **Free SSL certificates**
- ✅ **Custom domains** (unlimited)
- ✅ **Automatic preview deployments** for every PR

## 🔄 Automatic Deployments

Every time you push to your main branch, Cloudflare will automatically:
1. Build your site
2. Deploy the new version
3. Keep the old version until the new one is ready
4. Zero-downtime deployment

## 📝 Important Notes

- Your current configuration is **perfect** for Cloudflare Pages
- The contact form with Formspree will work perfectly (it's client-side)
- All animations and videos will work normally
- No server-side features are used, so everything will be static

## 🎯 Next Steps

1. Commit and push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Your site will be live and hosted **free forever**!

---

**Need help?** Check the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
