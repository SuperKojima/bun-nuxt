// https://nuxt.com/docs/api/configuration/nuxt-config

/* eslint-disable node/prefer-global/process */
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: process.env.CODESPACES ? 'wss' : 'ws',
        host: process.env.CODESPACE_NAME ? `${process.env.CODESPACE_NAME}-3000.github.dev` : 'localhost',
        port: 3000,
      },
    },
  },
})
