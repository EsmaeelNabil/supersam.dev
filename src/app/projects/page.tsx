import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { getGitHubRepos } from "@/lib/github"

export default async function Projects() {
  const repos = await getGitHubRepos("esmaeelnabil")

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of projects I&apos;ve worked on, ranging from open source contributions to personal experiments.
        </p>
      </div>

      {/* Projects Grid */}
      {repos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {repo.name}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    title="View source code"
                  >
                    <Github size={20} />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      title="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {repo.description || "No description available"}
              </p>

              {/* Topics/Tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{repo.topics.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Stats */}
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  {repo.language && (
                    <span className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-1"
                        style={{ 
                          backgroundColor: getLanguageColor(repo.language) 
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    {repo.forks_count}
                  </span>
                </div>
                <span>
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            No projects found. Make sure your GitHub username &quot;esmaeelnabil&quot; is correct 
            in the code.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Github className="w-4 h-4 mr-2" />
            Visit GitHub
          </a>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in collaborating?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I&apos;m always open to discussing new projects and opportunities.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}

// Helper function to get language colors
function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    HTML: '#e34c26',
    CSS: '#1572B6',
    Vue: '#2c3e50',
    React: '#61dafb',
  }
  return colors[language] || '#8b5cf6'
}
