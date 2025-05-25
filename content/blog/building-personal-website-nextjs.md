---
title: "Building a Personal Website with Next.js"
date: "2024-01-20"
excerpt: "A comprehensive guide on creating a modern personal website using Next.js, TypeScript, and Tailwind CSS."
tags: ["nextjs", "typescript", "tutorial", "web-development"]
---

# Building a Personal Website with Next.js

Creating a personal website is one of the best ways to showcase your skills as a developer. In this post, I'll walk you through building a modern, performant personal website using Next.js.

## Why Next.js?

Next.js offers several advantages for personal websites:

- **Static Site Generation (SSG)** for lightning-fast loading
- **Built-in optimization** for images, fonts, and more
- **SEO-friendly** with great meta tag support
- **Easy deployment** with platforms like Vercel

## Tech Stack

For this project, we'll use:

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **MDX** - Markdown with JSX for blog posts

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── projects/
│   └── blog/
├── components/
│   ├── Navigation.tsx
│   └── ...
└── lib/
    ├── blog.ts
    └── github.ts
```

## Key Features

### 1. Responsive Navigation

```tsx
const Navigation = () => {
  const pathname = usePathname()
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      {/* Navigation content */}
    </nav>
  )
}
```

### 2. Dark Mode Support

Using `next-themes` for seamless dark mode:

```tsx
import { ThemeProvider } from 'next-themes'

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
```

### 3. GitHub Integration

Automatically fetch and display your repositories:

```typescript
export async function getGitHubRepos(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  )
  return response.json()
}
```

## Performance Optimizations

1. **Image Optimization** - Using Next.js Image component
2. **Font Optimization** - Loading fonts efficiently
3. **Code Splitting** - Automatic with Next.js
4. **Static Generation** - Pre-rendering pages at build time

## Deployment

Deploy your site to Vercel with a single command:

```bash
npx vercel --prod
```

## Conclusion

Building a personal website with Next.js gives you a powerful platform to showcase your work and share your knowledge. The combination of modern tooling and excellent performance makes it an ideal choice for developers.

What's your experience with Next.js? Let me know in the comments below!
