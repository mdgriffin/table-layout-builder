<template>
  <div id="app">
    <TableBuilder />
  </div>
</template>

<script>
import TableBuilder from './components/TableBuilder.vue'

export default {
  name: 'App',
  components: {
    TableBuilder
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
