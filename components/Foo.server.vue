<script setup>
import  MarkdownIt from 'markdown-it'

defineProps({
    count: Number
})

const md = new MarkdownIt()
const string = `# my component
- markdown list
- rendered as html
- cool
`
const html = md.render(string)

// const {data,error} = await useFetch('/api/getFeatureFlag')
// const value = ref(data.value)
// console.log("🚀 ~ file: Foo.server.vue:12 ~ error:", error)
// console.log("🚀 ~ file: Foo.server.vue:12 ~ data:", data)
</script>

<template>
<!-- The count is {{count}} -->
<div v-html="html"/>
<!-- The value is : {{value}} -->
<!-- <button @click="navigateTo('/ff')">next</button> -->
<!-- <button @click="window.location.href = '/ff'">next</button>  -->
 
</template>