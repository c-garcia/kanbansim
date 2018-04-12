<template>
  <ul :class='["item-source", itemSourceName]'>
    <li class="source-title">{{itemSourceTitle}}</li>
  </ul>
</template>

<script>
export default {
  name: 'ItemSource',
  props: ['itemSourceName', 'itemSourceTitle']
}
</script>

<style scoped>

</style>
