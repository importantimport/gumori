import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import serviceWorker from 'astro-service-worker'

import UnoCSS from 'unocss/vite'
import { presetUno, presetTypography } from 'unocss'

import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://astro.build/config
export default defineConfig({
  site: 'https://gumori.netlify.app',
  adapter: netlify(),
  integrations: [sitemap(),serviceWorker()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { light: 'github-light', dark: 'github-dark' },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word']
          }
        }
      ],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ]
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [presetUno(), presetTypography()]
      })
    ]
  }
})
