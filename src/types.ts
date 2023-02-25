interface ProjectFrontmatter {
  title: string,
  date: string,
  tags: string[],
  draft?: boolean,
  image: string,
  smallImage?: string,
  icon: string,
}

export type {
  ProjectFrontmatter
}