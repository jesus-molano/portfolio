import type { MarkdownInstance } from 'astro'
import type { ProjectFrontmatter } from '@types'
import { formatDate, sortElementsByDate } from '@utils'
import './project-list.css'
import { SearchBar } from '@components/SearchBar'
import { useState } from 'react'

type Project = MarkdownInstance<ProjectFrontmatter>

interface Props {
  projects: Project[]
}

export const ProjectsList = ({ projects }: Props) => {
  projects = sortElementsByDate(projects)
  const [listedProjects, setListedProjects] = useState(projects)
  
  if (import.meta.env.PROD) {
    setListedProjects(projects.filter(project => !project.frontmatter.draft))
  }
  
  const filterProjects = (search: string) => {
    console.log('search', search);
    setListedProjects(projects.filter(project => project.frontmatter.title.toLowerCase().includes(search.toLowerCase())))
  }

  return (
    <div className='projects-container'>
      <SearchBar filterProjects={filterProjects} />
      {listedProjects.map(project => {
        const formatedDate = formatDate(project.frontmatter.date)
        return (
          <a href={project.url} className='project' key={project.frontmatter.title}>
            {project.frontmatter.draft && <span className='draft'>DRAFT</span>}
            <img
              className='technology-icon'
              src={project.frontmatter.icon}
              alt='technology icon'
            />
            <div className='project-texts'>
              {project.frontmatter.title}
              {project.frontmatter.date && (
                <span className='date'>{formatedDate}</span>
              )}
            </div>
          </a>
        )
      })}
    </div>
  )
}