export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rapid Services',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Rapid Services, a place to promote your stuff like no other!',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'og:url', hid: 'og:url', content: 'https://rapid-services.org' },
      {
        name: 'og:image',
        hid: 'og:image',
        content: 'https://imgs.mrfluffycloud.xyz/Logo-Bolt-Resized.png',
      },
      { name: 'og:title', hid: 'og:title', content: 'Rapid Services' },
      { name: 'og:site_name', hid: 'og:site_name', content: 'Rapid Services' },
      {
        name: 'og:description',
        hid: 'og:description',
        content: 'Rapid Services, a place to promote your stuff like no other!',
      },
      { name: 'author', content: 'MrFluffycloud' },
      { name: 'theme-color', content: '#9333ea' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'shortcut-icon',
        href: 'https://imgs.mrfluffycloud.xyz/Logo-Bolt-Resized-96.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '128x128',
        href: 'https://imgs.mrfluffycloud.xyz/Logo-Bolt-Resized-128.png',
      },
      {
        rel: 'mask-icon',
        color: '#9333ea',
        href: 'https://imgs.mrfluffycloud.xyz/Logo.svg',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/number-animation.js', ssr: false },
    { src: '~/plugins/vue-comp.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  generate: { fallback: '404.html' },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
