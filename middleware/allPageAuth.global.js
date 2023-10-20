export default defineNuxtRouteMiddleware((to, from) => {
    console.log('This is a global middleware should log in all pages')
})
