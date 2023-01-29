
type CardAbout = {
  text: string
  url: string
  alt: string
}

type ProjectsCard = {
  title: string
  imgURL: string
  definition: string
  githubURL: string
  technologies: {
    name: string
    url: string
    icon: string
  }[]
  webURL: string
}

type ContactForm = {
  name: string
  email: string
  message: string
  submit: string
}

type Link = {
  text?: string
  href: string
}

export type { CardAbout, ProjectsCard, ContactForm, Link}
