// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/ui', '@vueuse/motion/nuxt'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
});
