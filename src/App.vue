<template>
  <div>
    <v-app>
      <Header/>
    <HelloWorld/>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
</style>
