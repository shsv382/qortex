<template>
    <q-card class="song">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-left">
          <h3>
              {{ song.title }}
          </h3>
          <h5>{{ artist.name }}</h5>
        </div>
      </q-img>
      <q-card-actions>
        <q-btn flat>Слушать</q-btn>
        <q-btn flat>Скачать</q-btn>
        <q-btn flat><RouterLink :to="`/artist/${artist.id}`">К исполнителю</RouterLink></q-btn>
        <!-- <q-btn flat>К альбому</q-btn> -->
      </q-card-actions>
    </q-card>
</template>

<script setup>
import { defineProps } from "vue";
import { useMusicStore } from '../store/musicStore';
import { storeToRefs } from "pinia";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

const music = useMusicStore()
// const { songs, artists, albums } = storeToRefs(music)
const { songs, artists } = storeToRefs(music)

const song = songs.value.find(s => s.id == props.id)
const artist = artists.value.find(a => a.id == song.artistId)
// const inAlbums = song.albums.map(n => albums.value.find(a => a.id == n.id).title)

</script>