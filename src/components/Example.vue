<template>
  <div>{{ $data.count }}</div>
  <div>{{ props.binding }}</div>
  <q-btn @click="increaseData">Inside Button</q-btn>
  <q-btn @click="increaseDataOutside">Inside Outside Button</q-btn>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Example",
  props: {
    binding: {
      type: Number,
      default: 0,
    },
  },
  emits: { clickButton: null },
  setup(props) {
    return { props };
  },
  data() {
    return {
      count: this.props.binding,
    };
  },
  methods: {
    increaseData() {
      this.count++;
    },
    increaseDataOutside() {
      this.$emit("clickButton", this.count);
    },
  },
});
</script>
