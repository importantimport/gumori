export const site: Config.Site = {
  url: import.meta.env.SITE,
  title: 'Gumori',
  description: 'Lightweight, Fast, IndieWeb-Compatible Astro Blog Starter.',
  keywords: ['Gumori', 'Astro', 'UnoCSS'],
  authors: {
    default: {
      name: 'John Doe',
      url: import.meta.env.SITE,
      default: true
      // },
      // default2: {
      //   name: 'Jane Doe',
      //   url: import.meta.env.SITE,
      //   default: true
    }
  },
  lang: 'en',
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css' // new.css
    // 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css', // water.css
    // 'https://unpkg.com/sakura.css/css/sakura.css', // sakura.css
    // 'https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css', // pico.css
    // 'https://unpkg.com/bamboo.css', // bamboo.css
    // 'https://cdn.jsdelivr.net/npm/holiday.css@0.9.8', // holiday.css
    // 'https://cdn.simplecss.org/simple.min.css', // simple.css
    // 'https://unpkg.com/mvp.css', // mvp.css
  ]
}

export const page: Config.Page = {
  pageSize: 5
}

export const nav: Config.Nav = [
  {
    text: 'Elements',
    link: '/elements'
  },
  {
    text: 'RSS',
    link: '/rss.xml'
  },
  {
    text: 'Sitemap',
    link: import.meta.env.SITE + 'sitemap-0.xml'
  }
]

export const rss: Config.RSS = {}

export const date: Config.Date = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
}

export const typeOfPost = (frontmatter: FrontMatter): string =>
  frontmatter.title ? 'article' : frontmatter.photo ? 'photo' : 'note'
