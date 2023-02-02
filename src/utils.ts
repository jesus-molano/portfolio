const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const capitalizeSentence = (input: string): string => {
  const words = input.split(' ')
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capitalizedWords.join(' ')
}


import type { MarkdownInstance } from 'astro'
import type { ProjectFrontmatter } from '@types'

type Project = MarkdownInstance<ProjectFrontmatter>

function sortElementsByDate(projects: Project[]): Project[] {
  return projects.sort((a: Project, b: Project): number => {
    if (a.frontmatter.date > b.frontmatter.date) return -1
    if (b.frontmatter.date > a.frontmatter.date) return 1
    return 0
  })
  
}

export { formatDate, capitalizeSentence, sortElementsByDate }