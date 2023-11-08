<script setup>
const count = ref(1)
</script>
<template>

<div>
    <button @click="count++">increment</button>
    <Foo :count="count"/>
</div>
</template>