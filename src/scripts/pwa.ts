import { registerSW } from 'virtual:pwa-register'
;(() =>
  registerSW({
    onRegistered: r => r && setInterval(async () => await r.update(), 198964),
    onRegisterError: error => console.error(error)
  }))()
