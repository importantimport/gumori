import type { SiteConfig, PageConfig, StyleConfig, NavConfig, RSSConfig, DateConfig } from './types'

export const site: SiteConfig = {
  url: import.meta.env.SITE,
  title: 'Gumori',
  description: 'Lightweight, Fast, IndieWeb-Compatible Astro Blog Starter.',
  keywords: ['Gumori', 'Astro', 'UnoCSS'],
  author: 'John Doe',
  lang: 'en'
}

export const page: PageConfig = {
  pageSize: 5
}

export const style: StyleConfig = {
  font: 'sans'
}

export const nav: NavConfig = [
  {
    text: 'Elements',
    link: '/elements'
  },
  {
    text: 'RSS',
    link: '/rss.xml'
  },
  import.meta.env.PROD && {
    text: 'Sitemap',
    link: 'sitemap.xml'
  }
]

export const rss: RSSConfig = {}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
}
