import { AstroComponentFactory } from 'astro/dist/types/runtime/server'

declare global {
  type FrontMatter = {
    path: string
    authors?: (
      | string
      | {
          /** author name. */
          name: string
          /** author url. */
          url?: string
          /** author avatar, not currently in use. possible future use for JSON Feed. */
          avatar?: string
        }
    )[]
    title?: string
    created?: string
    published?: string
    photo?: string
    alt?: string
    summary?: string
    tags?: string[]
    flags?: string[]
  }

  type Post = {
    frontmatter: FrontMatter
    file: URL
    Content: AstroComponentFactory
  }

  type Page = {
    data: Post[]
    start: number
    end: number
    size: number
    total: number
    currentPage: number
    lastPage: number
    url: {
      current: string
      next?: string
      prev?: string
    }
  }

  namespace Config {
    type Site = {
      url: string
      title: string
      description?: string
      keywords?: string[]
      authors?: {
        [id: string]: {
          /** author name. */
          name: string
          /** author url. */
          url?: string
          /** author avatar, not currently in use. possible future use for JSON Feed. */
          avatar?: string
          /** whether this author is added to the article by default. */
          default?: boolean
        }
      }
      lang?: string
      stylesheets?: string[]
      scripts?: {
        src: string
        type: string
        async: boolean
        defer: boolean
      }[]
    }

    type Page = {
      paginationDir?: 'ltr' | 'rtl'
      pageSize?: number
    }

    type Nav =
      | {
          text: string
          link: string
        }[]
      | []

    type RSS = {
      limit?: number
      customData?: string
      stylesheet?: string
      xmlns?: { [key: string]: string }
    }

    type Date = {
      locales: string
      options: Intl.DateTimeFormatOptions
    }
  }
}
