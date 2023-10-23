import DesignSystem from '@momwins/mom-design-system-v3';
import {CommonFormComponent} from '@momwins/wins-common-form-component';
export default defineNuxtPlugin(nuxtApp => {
    console.log("🚀 ~ file: momDesignSystemV3.js:2 ~ nuxtApp:", nuxtApp)
    nuxtApp.vueApp.use(DesignSystem)
    nuxtApp.vueApp.use(CommonFormComponent, {
    lang: 'en',
    baseUrl: '/workpass/ep',
  });
})
