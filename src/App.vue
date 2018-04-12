<template>
  <div id="app">
    <stage stage-name='todo'></stage>
    <stage stage-name='inprogress'></stage>
    <stage stage-name='done'></stage>
  </div>
</template>

<script>
import Stage from '@/components/Stage.vue'

export default {
  name: 'App',
  components: {Stage}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
