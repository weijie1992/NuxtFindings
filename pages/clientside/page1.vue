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

</script>
<template>
This is client side render !!
<ComponentOne/>
<hr/>
<button @click="navigateToServerPage">UseRouterButton</button>
<hr/>
{{JSON.stringify(response)}}
</template>
