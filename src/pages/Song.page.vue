<template>
<h1>Song</h1>
<p>Название: {{ song.name }}</p>
<p>Исполнитель: {{ artist.name }}</p>
<p>В альбомах: {{ inAlbums.join(", ") }}</p>
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
const { songs, artists, albums } = storeToRefs(music)

const song = songs.value.find(s => s.id == props.id)
const artist = artists.value.find(a => a.id == song.artistId)
const inAlbums = song.albums.map(n => albums.value.find(a => a.id == n.id).name)

</script>