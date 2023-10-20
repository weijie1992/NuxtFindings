import DesignSystem from '@momwins/mom-design-system-v3';
export default defineNuxtPlugin(nuxtApp => {
    console.log("🚀 ~ file: momDesignSystemV3.js:2 ~ nuxtApp:", nuxtApp)
    nuxtApp.vueApp.use(DesignSystem)
})
