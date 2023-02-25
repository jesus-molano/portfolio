const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const capitalizeSentence = (input: string): string => {
  const words = input.split(' ')
  const capitalizedWords = words.map(word => {
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

function filterProjectsByTagAndTitle(projects: ProjectFrontmatter[], filter: string): ProjectFrontmatter[] {
  const lowerCaseFilter = filter.toLowerCase();
  return projects.filter(project => {
    const lowerCaseTitle = project.title.toLowerCase();
    const lowerCaseTags = project.tags.map(tag => tag.toLowerCase());
    
    return lowerCaseTitle.startsWith(lowerCaseFilter) || lowerCaseTags.some(tag => tag.startsWith(lowerCaseFilter));
  });
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

function enableScroll(): void {
  document.documentElement.style.scrollBehavior = 'smooth'
  window.onscroll = () => { }
}

function disableScroll(): void {
  document.documentElement.style.scrollBehavior = 'unset'
  const windowX = window.scrollX
  const windowY = window.scrollY
  window.onscroll = () => {
    window.scrollTo(windowX, windowY)
  }
}

const frontendStacks = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'React Router',
  'Vue',
  'Astro',
  'Cypress',
  'TailwindCSS',
  'Bootstrap',
  'Material UI',
  'Sass'
]
const backendStacks = ['NodeJS', 'Express', 'Php', 'Mongoose', 'Firebase']
const databases = ['MongoDB', 'MySQL', 'SQLServer']

export {
  frontendStacks,
  backendStacks,
  databases,
  slugify,
  formatDate,
  capitalizeSentence,
  sortElementsByDate,
  enableScroll,
  disableScroll,
  filterProjectsByTagAndTitle
}
