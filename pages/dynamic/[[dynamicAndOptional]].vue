<script setup>
const route = useRoute()
const params = route.params.dynamicAndOptional
console.log("🚀 ~ file: [[dynamicAndOptional]].vue:4 ~ params:", params)
</script>

<template>
This is dynamic and optional page
</template>
