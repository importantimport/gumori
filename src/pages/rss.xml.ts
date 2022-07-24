import rss from '@astrojs/rss'
import { resolve } from 'path'
import { site, rss as rssConfig } from '@src/gumori'

export const get = () =>
  rss({
    title: site.title,
    description: site.description,
    site: site.url ?? import.meta.env.SITE,
    items: Object.values(import.meta.globEager('../../gumori/**/*.md'))
      .map(post => ({
        ...post,
        frontmatter: {
          ...post.frontmatter,
          slug: post.file.replace(resolve('gumori'), ''),
          path: post.file.replace(resolve('gumori'), '').replace(/(.+?)(?:\/index\.md|\.md)/, '$1').slice(1)
        }
      }))
      .filter((post, index) => !post.frontmatter.flags?.includes('unlisted') && (!rssConfig.limit || index < rssConfig.limit))
      .sort(
        (a, b) =>
          Date.parse(b.frontmatter.published ?? b.frontmatter.created) -
          Date.parse(a.frontmatter.published ?? a.frontmatter.created)
      )
      .map(post => ({
        link: post.frontmatter.path,
        title: post.frontmatter.title ?? post.frontmatter.path,
        description: post.frontmatter.summary,
        pubDate: new Date(post.frontmatter.published ?? post.frontmatter.created ?? false).toISOString() as any
      })),
    customData: rssConfig.customData,
    stylesheet: rssConfig.stylesheet,
    xmlns: rssConfig.xmlns
  })
