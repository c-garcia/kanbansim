<template>
  <label>
    {{stageName}}
    <input :class='["capacity", stageName]' type="text" v-model='currCapacity' @keyup="notifyNewCapacity">
  </label>
</template>

<script>
export default {
  name: 'CapacitySetter',
  props: ['stageName', 'initialCapacity'],
  data: function () {
    return {currCapacity: this.initialCapacity}
  },
  methods: {
    notifyNewCapacity () {
      this.$emit('new-capacity', {stage: this.stageName, capacity: this.currCapacity})
    }
  },
  created () {
    this.$emit('new-capacity', {stage: this.stageName, capacity: this.currCapacity})
  }
}
</script>

<style scoped>

</style>
