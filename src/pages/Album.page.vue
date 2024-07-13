<template>
<h3 class="album__title">{{ album.title }} by {{ artist.name }}</h3>
<div class="album__songs">
    <template v-for="song in songsInAlbum" :key="song.title">
        <RouterLink :to="`/song/${song.id}`">
            <Song :title="song.title" :length="song.length" />
        </RouterLink>
    </template>
</div>
</template>

<script setup>
import { defineProps } from "vue";
import { useMusicStore } from '../store/musicStore';
import { storeToRefs } from "pinia";
import Song from "@/components/UI/Song.vue";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

const music = useMusicStore()
const { songs, artists, albums } = storeToRefs(music)

const album = albums.value.find(s => s.id == props.id)
const artist = artists.value.find(ar => ar.id == album.artistId)
const songsInAlbum = songs.value.filter(song => !!song.albums.find(al => al.id == album.id))
</script>

<style lang="scss">
.album__title {
    margin-bottom: 20px;
}

.album__songs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 5px;
    overflow-y: scroll;
}
</style>