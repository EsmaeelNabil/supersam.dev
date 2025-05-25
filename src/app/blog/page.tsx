import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { Calendar, Clock } from "lucide-react"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about software development, technology, and more.
        </p>
      </div>

      {/* Blog Posts */}
      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
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
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex space-x-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              No posts yet
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Blog posts will appear here once you add markdown files to the `content/blog` directory.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-left">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                To add a blog post, create a markdown file in:
              </p>
              <code className="text-sm font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                content/blog/your-post.md
              </code>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
