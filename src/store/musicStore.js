import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('music', {
  state: () => {
    const search = ref('')
    const songs = ref([
      {
        id: 1,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 1, orderNumber: 1},
          {id: 11, orderNumber: 3}
        ]
      },{
        id: 2,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 1, orderNumber: 3},
          {id: 11, orderNumber: 3}
        ]
      },{
        id: 3,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 1, orderNumber: 2},
          {id: 11, orderNumber: 3}
        ]
      },{
        id: 4,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 1, orderNumber: 5},
          {id: 11, orderNumber: 3}
        ]
      },{
        id: 5,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 1, orderNumber: 4},
          {id: 11, orderNumber: 3}
        ]
      },{
        id: 6,
        title: "Song 2",
        artistId: 2,
        length: '3:02',
        albums: [
          {id: 2, orderNumber: 1},
        ]
      },{
        id: 7,
        title: "Song 2",
        artistId: 2,
        length: '3:02',
        albums: [
          {id: 2, orderNumber: 3},
        ]
      },{
        id: 8,
        title: "Song 2",
        artistId: 2,
        length: '3:02',
        albums: [
          {id: 2, orderNumber: 2},
        ]
      },{
        id: 9,
        title: "Song 2",
        artistId: 3,
        length: '3:02',
        albums: [
          {id: 3, orderNumber: 1},
          {id: 5, orderNumber: 3}
        ]
      },{
        id: 10,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 3, orderNumber: 2},
          {id: 5, orderNumber: 4}
        ]
      },{
        id: 11,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 3, orderNumber: 3},
          {id: 5, orderNumber: 5}
        ]
      },{
        id: 12,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 3, orderNumber: 5},
        ]
      },{
        id: 13,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 3, orderNumber: 4},
        ]
      },{
        id: 14,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 5, orderNumber: 1},
        ]
      },{
        id: 15,
        title: "Song 2",
        artistId: 1,
        length: '3:02',
        albums: [
          {id: 5, orderNumber: 2},
        ]
      },
    ])

    const artists = ref([
      {id: 1, name: "Blur"},
      {id: 2, name: "Green Day"},
      {id: 3, name: "Linkin Park"},
    ])

    const albums = ref([
      {id: 1, title: "Best Songs", artistId: 1, year: 2002, length: 5},
      {id: 2, title: "Holiday", artistId: 2, year: 2004, length: 5},
      {id: 3, title: "Meteora", artistId: 3, year: 2003, length: 5},
      {id: 5, title: "Hybrid Theory", artistId: 3, year: 2003, length: 5},
      {id: 11, title: "Remixes", artistId: 1, year: 2005, length: 5},
    ])

    const addSong = (song) => {
      songs.value = [...songs.value, song];
    }

    const incrementAlbumLength = (albID) => {
      albums.value = albums.value.map(alb => {
        return (alb.id === albID) ? {...alb, length: alb.length + 1} : alb
      })
    }

    return {
      search,
      songs,
      artists,
      albums,
      addSong,
      incrementAlbumLength,
    }
  },
  persist: [
    {
      paths: ['songs', 'artists', 'albums'],
      storage: localStorage,
    },
    {
      paths: ['search'],
      storage: sessionStorage,
    },
  ],
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMusicStore, import.meta.hot))
}
