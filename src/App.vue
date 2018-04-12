<template>
  <div id="app">
    <div>
      <capacity-setter stage-name="design" v-model="designCapacity"></capacity-setter>
      <capacity-setter stage-name="code" v-model="codeCapacity"></capacity-setter>
      <capacity-setter stage-name="qa" v-model="qaCapacity"></capacity-setter>
    </div>
    <div>
      <item-source item-source-name='todo' item-source-title="To do"></item-source>
      <stage stage-name='design' stage-title="Design" :stage-capacity="designCapacity"></stage>
      <stage stage-name='code' stage-title="Code" :stage-capacity="codeCapacity"></stage>
      <stage stage-name='qa' stage-title="Q&A" :stage-capacity="qaCapacity"></stage>
      <item-sink item-sink-name='done' item-sink-title="Done"></item-sink>
    </div>
  </div>
</template>

<script>
import Stage from '@/components/Stage.vue'
import ItemSource from '@/components/ItemSource.vue'
import ItemSink from '@/components/ItemSink.vue'
import CapacitySetter from '@/components/CapacitySetter.vue'

export default {
  name: 'App',
  components: {Stage, ItemSource, ItemSink, CapacitySetter},
  computed: {
    designCapacity: {
      get () {
        return this.$store.getters.designCapacity
      },
      set (newCapacity) {
        this.$store.commit('newCapacity', {stage: 'design', 'capacity': newCapacity})
      }
    },
    codeCapacity: {
      get () {
        return this.$store.getters.codeCapacity
      },
      set (newCapacity) {
        this.$store.commit('newCapacity', {stage: 'code', 'capacity': newCapacity})
      }
    },
    qaCapacity: {
      get () {
        return this.$store.getters.qaCapacity
      },
      set (newCapacity) {
        this.$store.commit('newCapacity', {stage: 'qa', 'capacity': newCapacity})
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
