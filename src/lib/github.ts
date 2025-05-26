export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  homepage: string | null
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add your GitHub token for higher rate limits (optional)
          // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 } // Revalidate every hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }

    const repos: GitHubRepo[] = await response.json()
    
    // Filter out forks and sort by stars/activity
    return repos
      .filter(repo => !repo.name.startsWith('.') && repo.description) // Filter out dot files and repos without descriptions
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 200) // Show top 12 repositories
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return []
  }
}

export async function getGitHubUser(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch user data')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    return null
  }
}
