interface ProjectFrontmatter {
  title: string,
  date: string,
  tags?: string[],
  draft?: boolean,
  image: string,
  smallImage?: string
}

export type {
  ProjectFrontmatter
}