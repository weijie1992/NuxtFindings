// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // vite:{
  //   esbuild:{
  //     drop: ['console']
  //   },
  //   vue:({
  //     template: {
  //       compilerOptions: {
  //         nodeTransforms: isProd ? [removeDataTestAttrs] : [],
  //       },
  //     },
  //   })
  // },
  devtools: { enabled: true },
  routeRules: {      
    '/spa': { ssr: false },
    '/static': { prerender: true },
    '/swr': { swr: 120 },     
    '/ffclient': { ssr: false },
    '/ffApiClient': { ssr: false },
  },
  runtimeConfig: {
    public: {
      FF1: true,
      FF2:false
    },}
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix:false
  //   }
  // ]
})
