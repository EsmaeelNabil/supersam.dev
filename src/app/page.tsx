import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { getGitHubRepos } from "@/lib/github"
import { getAllPosts } from "@/lib/blog"

export default async function Home() {
  // Fetch latest projects and blog posts
  const repos = await getGitHubRepos("esmaeelnabil")
  const posts = getAllPosts()
  
  const featuredRepos = repos.slice(0, 3)
  const latestPosts = posts.slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Esmaeel Moustafa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Mobile Engineer offering 7+ years experience in building, integrating, testing and supporting different android applications across different business areas using different technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
            >
              Learn more about me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View my projects
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRepos.map((repo) => (
            <div
              key={repo.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {repo.name}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <Github size={20} />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {repo.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  {repo.language}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="py-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest Posts
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
