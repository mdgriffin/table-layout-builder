<template>
  <div id="app">
    <layout-builder />
  </div>
</template>

<script>
// import TableBuilder from './components/TableBuilder.vue'
import LayoutBuilder from './components/LayoutBuilder.vue';

export default {
  name: 'App',
  components: {
    LayoutBuilder
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
