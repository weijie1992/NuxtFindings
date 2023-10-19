export default async () => {
    const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("🚀 ~ file: useFetchData.js:3 ~ useFetchData ~ error:", error.value)
    console.log("🚀 ~ file: useFetchData.js:3 ~ useFetchData ~ data:", data.value)
    return data
}

