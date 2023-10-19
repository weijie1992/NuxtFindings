export default defineEventHandler(async (event) => {
    const { foreignerId } = event.context.params
    const {name,  fin } = getQuery(event)
    console.log("🚀 ~ file: [foreignerId].js:4 ~ defineEventHandler ~ fin:", fin)
    console.log("🚀 ~ file: [foreignerId].js:4 ~ defineEventHandler ~ name:", name)
    const res = await $fetch(`https://jsonplaceholder.org/users/${foreignerId}`)
    return res
})
