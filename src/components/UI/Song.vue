<template>
    <q-card class="artist-song">
        <q-card-section horizontal>
            <q-img
            class="col-3 artist-song__avatar"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            />

            <q-card-section class="artist-song__data">
                <span>
                    {{ props.title }}
                </span>
                <span>
                    {{ props.length }}
                </span>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    length: {
        type: String,
    }
})
</script>

<style lang="scss">
.artist-song {
    width: 100%;
}

.artist-song__avatar {
    min-height: 100%;
    height: 100%;
}

.artist-song__data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>