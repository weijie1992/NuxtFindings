<script setup>
const toShowFeatureFlag = await useFetch('/api/getFeatureFlag')
const toshow = ref(toShowFeatureFlag.data.value)
// console.log("🚀 ~ file: ff.vue:3 ~ toShowFeatureFlag:", toShowFeatureFlag)
// const togger = async() => {
//     toshow.value = await useFetch('/api/getFeatureFlag')
// }
</script>
<template>
<div v-if="toshow">Show New Features</div>
<button @click="togger">togger</button>
<button @click="navigateTo('/spa')">next</button>
</template>