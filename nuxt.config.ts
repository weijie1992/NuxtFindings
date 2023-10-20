// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
   css: ['assets/main.css'],
  routeRules: {      
    '/spa': { ssr: false },
    '/static': { prerender: true },
    '/swr': { swr: 120 },     
  }  
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix:false
  //   }
  // ]
})
