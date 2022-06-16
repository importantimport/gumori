import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media'
    }),
    presetTypography()
  ]
})
