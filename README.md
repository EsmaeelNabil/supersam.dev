# Personal Website - Software Engineer Portfolio

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features a blog, project showcase connected to GitHub, and professional CV/About section.

## 🚀 Features

- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Blog System**: Markdown-based blog with syntax highlighting
- **GitHub Integration**: Automatic project showcase from GitHub repositories
- **Dark Mode**: System-preference aware dark/light theme
- **SEO Optimized**: Proper meta tags and structured data
- **Responsive Design**: Mobile-first, professional layout
- **Analytics Ready**: Google Analytics integration
- **Performance**: Static site generation for lightning-fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with MDX support
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Analytics**: Google Analytics (optional)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage with hero & featured content
│   ├── about/               # About/CV page
│   ├── projects/            # GitHub projects showcase
│   └── blog/                # Blog listing and individual posts
├── components/
│   ├── Navigation.tsx       # Main navigation component
│   └── GoogleAnalytics.tsx  # Analytics component
└── lib/
    ├── blog.ts              # Blog post utilities
    └── github.ts            # GitHub API integration

content/
└── blog/                    # Markdown blog posts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd supersamdev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional: Google Analytics
   GITHUB_TOKEN=your_github_token_here         # Optional: Higher GitHub API limits
   ```

4. **Customize the content**
   - Personal information has been updated for Esmaeel Moustafa
   - GitHub username is configured as "esmaeelnabil"
   - Profile photo has been added from LinkedIn
   - Social media links are configured in `src/components/Navigation.tsx`
   - About page includes professional experience and skills

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Adding Blog Posts

Create new markdown files in the `content/blog/` directory:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
---

# Your Content Here

Write your blog post content in Markdown...
```

## 🔧 Customization

### Personal Information
- Update `src/app/about/page.tsx` with your experience and skills
- Modify `src/components/Navigation.tsx` with Esmaeel Moustafa and links
- Replace placeholder avatar in `public/placeholder-avatar.jpg`

### GitHub Integration
- GitHub username is already configured as "esmaeelnabil" in:
  - `src/app/page.tsx`
  - `src/app/projects/page.tsx`

### Styling
- Customize colors and themes in `tailwind.config.ts`
- Modify global styles in `src/app/globals.css`

### Analytics
- Add your Google Analytics ID to `.env.local`
- Analytics will automatically track page views

## 🚀 Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```

### Other Platforms
The site generates static files and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🐳 Docker Deployment

### Quick Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build -d
   ```

2. **Or use the deployment script**
   ```bash
   ./deploy.sh
   ```

3. **Manual Docker commands**
   ```bash
   # Build the image
   docker build -t esmaeel-website .
   
   # Run the container
   docker run -d -p 3000:3000 --name esmaeel-website esmaeel-website
   ```

### Production Environment Variables

For production deployment, create a `.env.production` file:

```env
NODE_ENV=production
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# No GitHub token needed - uses public API
```

### Docker Image Details

- **Base Image**: Node.js 18 Alpine (lightweight)
- **Multi-stage build**: Optimized for production
- **Security**: Runs as non-root user
- **Size**: ~150MB (optimized with standalone output)
- **Health Check**: Included for container orchestration

### Deployment to Cloud Platforms

The Docker image can be deployed to:
- **DigitalOcean App Platform**
- **Railway**
- **Render**
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Any VPS with Docker**

Example for cloud deployment:
```bash
# Tag for registry
docker tag esmaeel-website your-registry/esmaeel-website:latest

# Push to registry
docker push your-registry/esmaeel-website:latest
```

## 📊 Performance

- **Static Site Generation**: Pages pre-rendered at build time
- **Image Optimization**: Automatic with Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Bundle Analysis**: Run `npm run build` to see bundle sizes

## 🤝 Contributing

This is a personal website template. Feel free to:
- Fork the repository
- Customize for your own use
- Submit issues for bugs
- Suggest improvements

## 📄 License

MIT License - feel free to use this template for your own personal website.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
