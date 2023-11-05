<template>
<div>
<div v-if="toShow">
    Vite hide code
</div>
</div>

</template>
<script setup>
const toShow = ref(false)
</script>