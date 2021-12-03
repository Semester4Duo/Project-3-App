<template>
  <div
    :style="{
      'background-color': hasDoneBefore ? '#8A8A8A' : '#C4C4C4',
    }"
  ></div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    hasDoneBefore: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: auto;
  height: 3px;
  margin: 3px;
  margin-top: 10px;
  border-radius: 20px;
}
</style>
