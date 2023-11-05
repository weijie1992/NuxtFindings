<script setup>
const toShowFeatureFlag = await useFetch('/api/getFeatureFlag')
const toshow = toShowFeatureFlag.data.value
console.log("🚀 ~ file: ff.vue:3 ~ toShowFeatureFlag:", toshow)

</script>
<template>
<div v-if="toshow">Show New Features</div>
</template>