import type { Plugin } from 'vite'
import { createLogger } from 'vite'
import { join, resolve } from 'path'
import { readdir, rm } from 'fs/promises'
import astroConfig from '../../astro.config'

const logger = createLogger('info', { prefix: '[gumori]', allowClearScreen: true })

/**
 * clean Markdown files
 * @param src The directory to read.
 */
const cleanMarkdown = async (src: string) =>
  await readdir(src, { withFileTypes: true }).then(files =>
    files.forEach(async file => {
      if (file.isDirectory()) return await cleanMarkdown(join(src, file.name))
      else if (file.name.endsWith('.md'))
        return await rm(join(src, file.name)).then(() =>
          logger.info(`cleaned file ${join(src, file.name)}`, { timestamp: true })
        )
    })
  )

/**
 * Vite Plugin Gumori
 * @remarks force vite.publicDir to be 'gumori' and automatically purge useless Markdown files at the close of the bundle.
 * @returns Vite Plugin Object
 */
export const Gumori = (): Plugin => ({
  name: 'vite-plugin-gumori',
  config: () => ({ publicDir: 'gumori' }),
  closeBundle: async () => await cleanMarkdown(resolve(astroConfig.vite?.build?.outDir ?? 'dist'))
})
