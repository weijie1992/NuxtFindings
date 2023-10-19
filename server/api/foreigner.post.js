export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log("🚀 ~ file: foreigner.post.js:3 ~ defineEventHandler ~ body:", body)
    return body
})
