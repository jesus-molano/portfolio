// types/main.d.ts

export interface ContentLayoutProps {
  navbarLinks?: Link[]
  home: {
    welcome: string
    myself: string
    rol: string
  }
  about: {
    title: string
    cards: AboutCard[]
  }
  projects: {
    title: string
    cards: ProjectsCard[]
  }
  contact: {
    title: string
    text: string
    form: ContactForm
  }
  footer?: {
    text: string
    links: Link[]
  }
}

export type AboutCard = {
  text: string
  url: string
  alt: string
}

export type ProjectsCard = {
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

export type ContactForm = {
  name: string
  email: string
  message: string
  submit: string
}

export type Link = {
  text?: string
  href: string
}
