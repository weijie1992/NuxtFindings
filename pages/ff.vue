<script setup>
// const toShowFeatureFlag = await useFetch('/api/getFeatureFlag').data.value
// console.log("🚀 ~ file: ff.vue:3 ~ toShowFeatureFlag:", toShowFeatureFlag)
const toShowFF = useRuntimeConfig()
const show = ref(toShowFF.public.FF1)
const show2 = ref(toShowFF.public.FF2)
</script>
<template>
<div v-if="show">old feature</div>

<div v-if="show2">Show New Features2</div>

</template>