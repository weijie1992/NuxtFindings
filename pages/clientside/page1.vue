<script setup>
useHead({
    title: "Title using useHead Composable"
})

const router = useRouter()
const navigateToServerPage = () => {
    router.push('/serverside/page1')
}

const response = await useFetchData()
console.log("🚀 ~ file: page1.vue:13 ~ response:", response.value)

const response2 = ref([])
const getForeigner = async() => {
    const res =  (await useFetch('/api/foreigners')).data
    response2.value = res
    console.log("🚀 ~ file: page1.vue:16 ~ getForeigner ~ response:", response2.value)
}
</script>
<template>
This is client side render !!
<ComponentOne/>
<hr/>
<button @click="navigateToServerPage">UseRouterButton</button>
<hr/>
{{JSON.stringify(response)}}
<hr/>
<button @click="getForeigner">GetForeigner</button>
{{JSON.stringify(response2)}}
</template>
