<template>
  <div id="app">
    <div class="container">
      <layout-builder />
    </div>
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
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f4f4f4;
  margin: 0;
}

.container {
  width: 75%;
  margin: 40px auto;
  background: #fff;
  padding: 2em;
  border: 1px #ccc;
}
</style>
