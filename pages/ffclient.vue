<script setup>
// const toShowFeatureFlag = await useFetch('/api/getFeatureFlag').data.value
// console.log("🚀 ~ file: ff.vue:3 ~ toShowFeatureFlag:", toShowFeatureFlag)
const toShowFF = useRuntimeConfig()
const show = ref(toShowFF.public.FF)
</script>
<template>
<div v-if="show">Show New Features</div>
</template>