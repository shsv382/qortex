<template>
    <div class="q-pa-md" style="max-width: 400px">
        <q-form
            @submit="onSubmit"
            class="q-gutter-md"
        >
            <q-input
            filled
            v-model="title"
            label="Song's title"
            lazy-rules
            :rules="[ val => val && val.length > 0 || `Song's title`]"
            />
            <q-select 
            v-for="(alb, idx) in song_albums"
            :key="alb.title"
            :options="albums_options" 
            filled 
            v-model="song_albums[idx]"
            />
            <q-select 
            :options="albums_options" 
            filled 
            v-model="song_albums[song_albums.length]"
            />
    
            <div>
            <q-btn label="Добавить" type="submit" color="primary"/>
            </div>
        </q-form>
  
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMusicStore } from '../store/musicStore';
import { storeToRefs } from "pinia";

const music = useMusicStore()
const { songs, albums } = storeToRefs(music)

const albums_options = albums.value.map(album => ({
    ...album,
    label: album.title,
    value: album.id,
}))

const id = songs.value[songs.value.length - 1].id + 1;
const title = ref('');
const length = ref(`${Math.floor(Math.random() * 5)}:${Math.floor(Math.random() * 60)}`)
const song_albums = ref([]);

const onSubmit = e => {
    let song = {
        id, 
        title: title.value,
        length: length.value,
        artistId: song_albums.value[0].artistId,
        albums: song_albums.value.map(alb => (
        {
            id: alb.value,
            orderNumber: alb.length
        }
        ))
    }
    music.addSong(song)
    music.incrementAlbumLength(song_albums.value[0].id)
    title.value = ''
    song_albums.value = []
    length.value = `${Math.floor(Math.random() * 5)}:${Math.floor(Math.random() * 60)}`
}
</script>