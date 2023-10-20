export default defineNuxtRouteMiddleware((to, from ) => {
    console.log("🚀 ~ file: auth.js:2 ~ defineNuxtRouteMiddleware ~ to:", to)
    if (to.path.includes('protected')) {
        return navigateTo('/')
    }
    return
})
