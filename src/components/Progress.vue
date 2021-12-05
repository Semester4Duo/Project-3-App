<template>
  <div>
    <svg
      width="83"
      height="6"
      viewBox="0 0 83 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="67"
        y="2"
        width="16"
        height="2"
        rx="1"
        :fill="[progress >= 6 ? color : '#888']"
      />
    </svg>

    <svg
      width="86"
      height="6"
      viewBox="0 0 86 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="80"
        width="6"
        height="6"
        rx="3"
        :fill="[progress >= 6 ? color : '#888']"
      />
    </svg>

    <svg
      width="67"
      height="6"
      viewBox="0 0 67 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="51"
        y="2"
        width="16"
        height="2"
        rx="1"
        :fill="[progress >= 5 ? color : '#888']"
      />
    </svg>

    <svg
      width="70"
      height="6"
      viewBox="0 0 70 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="64"
        width="6"
        height="6"
        rx="3"
        :fill="[progress >= 5 ? color : '#888']"
      />
    </svg>

    <svg
      width="51"
      height="6"
      viewBox="0 0 51 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="35"
        y="2"
        width="16"
        height="2"
        rx="1"
        :fill="[progress >= 4 ? color : '#888']"
      />
    </svg>
    <svg
      width="54"
      height="6"
      viewBox="0 0 54 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="48"
        width="6"
        height="6"
        rx="3"
        :fill="[progress >= 4 ? color : '#888']"
      />
    </svg>
    <svg
      width="35"
      height="6"
      viewBox="0 0 35 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19"
        y="2"
        width="16"
        height="2"
        rx="1"
        :fill="[progress >= 3 ? color : '#888']"
      />
    </svg>

    <svg
      width="38"
      height="6"
      viewBox="0 0 38 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="32"
        width="6"
        height="6"
        rx="3"
        :fill="[progress >= 3 ? color : '#888']"
      />
    </svg>

    <svg
      width="19"
      height="6"
      viewBox="0 0 19 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="2"
        width="16"
        height="2"
        rx="1"
        :fill="[progress >= 2 ? color : '#888']"
      />
    </svg>

    <svg
      width="22"
      height="6"
      viewBox="0 0 22 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        width="6"
        height="6"
        rx="3"
        :fill="[progress >= 2 ? color : '#888']"
      />
    </svg>

    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="6"
        height="6"
        rx="3"
        :fill="[progress >= 1 ? color : '#888']"
      />
    </svg>
  </div>

  <!-- 
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
   -->
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
    color: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  padding-left: 0px;
  padding-top: 8px;
  padding-bottom: 5px;
  justify-content: center;
}

svg {
  position: absolute;
  padding: 0;
  fill: #888 !important;
}
</style>
