import { useState } from 'react'
import type { MarkdownInstance } from 'astro'
import type { ProjectFrontmatter } from '@types'
import { formatDate, sortElementsByDate } from '@utils'
import { SearchBar } from '@components/SearchBar'
import './project-list.css'

type Project = MarkdownInstance<ProjectFrontmatter>

interface Props {
  projects: Project[]
}

export const ProjectsList = ({ projects }: Props) => {
  projects = sortElementsByDate(projects)
  const [listedProjects, setListedProjects] = useState(projects)
  const [searchString, setSearchString] = useState('')

  const filterProjects = (search: string) => {
    setSearchString(search)
    if (search === '') return setListedProjects(projects)
    const result = projects.filter(project => {
      const lowerCaseTitle = project.frontmatter.title.toLowerCase();
      const lowerCaseFilter = searchString.toLowerCase();
      const lowerCaseTags = project.frontmatter.tags.map(tag => tag.toLowerCase());
    
      return lowerCaseTitle.indexOf(lowerCaseFilter) !== -1 || lowerCaseTags.some(tag => tag.indexOf(lowerCaseFilter) !== -1);
    
    })
    setListedProjects(result)
  }

  return (
    <div className='projects-container'>
      <div className="search-container">
        <label htmlFor="search-bar" className='search-title'>Search by technology or title</label>
        <SearchBar filterProjects={filterProjects} />
      </div>
      {listedProjects.length === 0
        ? <div className='no-projects'>No results match your search.</div>
        : listedProjects.map(project => {
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
