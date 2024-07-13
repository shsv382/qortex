<template>
    <q-card class="album">
      <q-img class="album-image" src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-left">
          <h6 v-if="!!props.artist">
              {{ props.title }} by {{ props.artist }}
          </h6>
          <h6 v-else>
              {{ props.title }}
          </h6>
        </div>
      </q-img>
    </q-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
    }
})
</script>

<style lang="scss">
.album {
    min-width: 320px;
    min-height: 320px;
    width: 320px;
    height: 320px;
}

.album-image {
    height: 100%;
}
</style>