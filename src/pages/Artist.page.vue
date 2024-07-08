<template>
<h1>Artist</h1>
</template>

<script setup>
import { defineProps, onMounted } from "vue";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})
onMounted(() => {
    console.log(props.id)
})
</script>