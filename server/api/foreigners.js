export default defineEventHandler(async (event) => {
    const res = await $fetch(`https://jsonplaceholder.org/users`)
    console.log("🚀 ~ file: foreigners.js:3 ~ defineEventHandler ~ res:", res)
    return res
})
