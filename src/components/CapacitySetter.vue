<template>
  <label>
    {{stageName}}
    <input :class='["capacity", stageName]' type="text" ref='cap' :value="value" @input="updateCapacity">
  </label>
</template>

<script>
export default {
  name: 'CapacitySetter',
  props: ['stageName', 'value'],
  methods: {
    updateCapacity () {
      this.$emit('input', this.$refs.cap.value)
    }
  }
}
</script>

<style scoped>

</style>
