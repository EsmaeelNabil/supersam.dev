import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getPostBySlug, getAllPosts, markdownToHtml } from "@/lib/blog"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Navigation */}
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readingTime}
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <article 
        className="prose dark:prose-invert max-w-none prose-lg
                   prose-headings:text-gray-900 dark:prose-headings:text-white
                   prose-p:text-gray-700 dark:prose-p:text-gray-300
                   prose-a:text-blue-600 dark:prose-a:text-blue-400
                   prose-strong:text-gray-900 dark:prose-strong:text-white
                   prose-code:text-red-600 dark:prose-code:text-red-400
                   prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                   prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
                   prose-blockquote:border-l-blue-500 dark:prose-blockquote:border-l-blue-400"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all posts
        </Link>
      </div>
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
