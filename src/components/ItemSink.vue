<template>
  <ul :class='["item-sink", itemSinkName]'>
    <li class="sink-title">{{itemSinkTitle}}</li>
  </ul>
</template>

<script>
export default {
  name: 'ItemSink',
  props: ['itemSinkName', 'itemSinkTitle']
}
</script>

<style scoped>

</style>
