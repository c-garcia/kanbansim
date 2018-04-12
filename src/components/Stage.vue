<template>
  <ul :class='["stage", stageName]'></ul>
</template>

<script>
export default {
  name: 'Stage',
  props: ['stageName']
}
</script>

<style scoped>

</style>
