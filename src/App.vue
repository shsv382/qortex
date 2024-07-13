<template>
  <RouterView v-slot="{ Component }">
    <Layout>
      <component :is="Component" />
    </Layout>
  </RouterView>
</template>

<script>
// import { RouterLink } from 'vue-router'
import Layout from './components/Layout/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
