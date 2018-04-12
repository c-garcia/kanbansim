<template>
  <ul :class='["stage", stageName]'>
    <li class="stage-title">{{stageTitle}}({{stageCapacity}})</li>
  </ul>
</template>

<script>
export default {
  name: 'Stage',
  props: ['stageName', 'stageTitle', 'stageCapacity']
}
</script>

<style scoped>

</style>
