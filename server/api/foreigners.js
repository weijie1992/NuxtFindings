export default defineEventHandler(async (event) => {
    const thisIsASecretInServerSide = 'thisIsASecretInServerSide'
    console.log("🚀 ~ file: foreigners.js:3 ~ defineEventHandler ~ thisIsASecretInServerSide:", thisIsASecretInServerSide)
    const res = await $fetch(`https://jsonplaceholder.org/users`)
    console.log("🚀 ~ file: foreigners.js:3 ~ defineEventHandler ~ res:", res)
    return res
})
