import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('music', {
  state: () => {
    const search = ref('')
    const songs = ref([
      {
        id: 1,
        name: "Song 2",
        artistId: 1,
        albums: [
          {id: 1, orderNumber: 1},
          {id: 11, orderNumber: 3}
        ]
      },
    ])

    const artists = ref([
      {id: 1, name: "Blur"},
      {id: 2, name: "Green Day"},
      {id: 3, name: "Linkin Park"},
    ])

    const albums = ref([
      {id: 1, name: "Best Songs", artistId: 1, year: 2002},
      {id: 2, name: "Holiday", artistId: 2, year: 2004},
      {id: 3, name: "Meteora", artistId: 3, year: 2003},
      {id: 11, name: "Remixes", artistId: 1, year: 2005},
    ])

    return {
      search,
      songs,
      artists,
      albums,
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
