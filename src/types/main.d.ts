// types/main.d.ts

export type CardAbout = {
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
