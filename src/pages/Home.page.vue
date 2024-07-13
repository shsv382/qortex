<template>
<AddSong />
<h2>Исполнители</h2>
<div class="albums">
    <RouterLink 
        v-for="artist in artists" 
        :key="artist.id + artist.name" 
        :to="`/artist/${artist.id}`"
    >
        <Album 
            :title="artist.name" 
         />
    </RouterLink>
</div>
<h2>Альбомы</h2>
<div class="albums">
    <RouterLink 
        v-for="album in albums" 
        :key="album.id + album.title" 
        :to="`/album/${album.id}`"
    >
        <Album 
            :title="album.title" 
            :artist="artists.find(artist => artist.id === album.artistId).name"
         />
    </RouterLink>
</div>
<h2>Хиты</h2>
<div class="songs">
    <RouterLink
        v-for="song in songs" 
        :key="song.id + song.title" 
        :to="`/song/${song.id}`"
    >
        <Song  
            :title="artists.find(artist => song.artistId === artist.id).name + ' - ' + song.title" 
            :length="song.length"
        />
    </RouterLink>
</div>

</template>

<script setup>
import { useMusicStore } from '../store/musicStore';
import { storeToRefs } from "pinia";
import AddSong from '@/components/AddSong.vue';
import Album from "@/components/UI/Album.vue";
import Song from "@/components/UI/Song.vue";
import { RouterLink } from 'vue-router';

const music = useMusicStore()
const { songs, artists, albums } = storeToRefs(music)
</script>

<style lang="scss">
.albums {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 20px;
    padding: 10px;
}

.songs {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 400px;
    overflow-y: scroll;
}
</style>