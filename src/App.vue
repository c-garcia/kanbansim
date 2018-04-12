<template>
  <div id="app">
    <capacity-setter stage-name="design" initial-capacity="4" @new-capacity="updateDesign"></capacity-setter>
    <capacity-setter stage-name="code" initial-capacity="3" @new-capacity="updateCode"></capacity-setter>
    <capacity-setter stage-name="qa" initial-capacity="4" @new-capacity="updateQA"></capacity-setter>
    <item-source item-source-name='todo' item-source-title="To do"></item-source>
    <stage stage-name='design' stage-title="Design" :stage-capacity="designCapacity"></stage>
    <stage stage-name='code' stage-title="Code" :stage-capacity="codeCapacity"></stage>
    <stage stage-name='qa' stage-title="Q&A" :stage-capacity="qaCapacity"></stage>
    <item-sink item-sink-name='done' item-sink-title="Done"></item-sink>
  </div>
</template>

<script>
import Stage from '@/components/Stage.vue'
import ItemSource from '@/components/ItemSource.vue'
import ItemSink from '@/components/ItemSink.vue'
import CapacitySetter from '@/components/CapacitySetter.vue'
import store from './store'

export default {
  name: 'App',
  components: {Stage, ItemSource, ItemSink, CapacitySetter},
  store,
  methods: {
    updateDesign (ev) {
      console.log('updateing design to ' + ev.capacity)
      this.$store.commit('newCapacity', {stage: 'design', 'capacity': ev.capacity})
    },
    updateCode (ev) {
      this.$store.commit('newCapacity', {stage: 'code', 'capacity': ev.capacity})
    },
    updateQA (ev) {
      this.$store.commit('newCapacity', {stage: 'qa', 'capacity': ev.capacity})
    }
  },
  computed: {
    designCapacity: {
      get () {
        console.log('getting design' + this.$store.getters.designCapacity)
        return this.$store.getters.designCapacity
      }
    },
    codeCapacity: {
      get () {
        return this.$store.getters.codeCapacity
      }
    },
    qaCapacity: {
      get () {
        return this.$store.getters.qaCapacity
      }
    }
  }
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
