import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import { Gumori } from './src/scripts/vite'

import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://astro.build/config
export default defineConfig({
  site: 'https://gumori.netlify.app',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, { theme: { light: 'github-light', dark: 'github-dark' } }],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['anchor-link'] },
            children: [{ type: 'text', value: '#' }]
          }
        }
      ]
    ]
  },
  vite: {
    optimizeDeps: { exclude: ['url'] },
    plugins: [Gumori()]
  }
})
