<template>
<h1>{{ artist.name }}</h1>
<div class="artist__content">
    <div class="artist__albums">
        <template v-for="album in artist_albums" :key="album.title">
            <RouterLink :to="`/album/${album.id}`">
                <Album :title="album.title" :artist="artist.name" />
            </RouterLink>
        </template>
    </div>
    <div class="artist__songs">
        <template v-for="song in artist_songs" :key="song.title">
            <RouterLink :to="`/song/${song.id}`">
                <Song :title="song.title" :length="song.length" />
            </RouterLink>
        </template>
    </div>
</div>
</template>

<script setup>
import { defineProps } from "vue";
import { useMusicStore } from '../store/musicStore';
import { storeToRefs } from "pinia";
import Album from "@/components/UI/Album.vue";
import Song from "@/components/UI/Song.vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

const music = useMusicStore()
const { songs, artists, albums } = storeToRefs(music)

const artist = artists.value.find(a => a.id == props.id)
const artist_albums = albums.value.filter(a => a.artistId == artist.id)
const artist_songs = songs.value.filter(s => s.artistId == artist.id)

</script>

<style lang="scss">
.artist__content {
    display: flex;
    justify-content: space-between;
}

.artist__albums {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 70%;
}

.artist__songs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 30%;
    height: 320px;
    padding: 5px;
    overflow-y: scroll;
}
</style>