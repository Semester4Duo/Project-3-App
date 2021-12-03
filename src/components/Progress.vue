<template>
  <div class="range">
    <input
      type="range"
      min="1"
      :max="steps"
      steps="1"
      :value="progress"
      style="width: 100%"
    />
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    progress: {
      type: Number,
      required: true,
    },
    steps: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
