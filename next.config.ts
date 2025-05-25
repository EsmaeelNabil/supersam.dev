import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  output: 'standalone',
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig);
