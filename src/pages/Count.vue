<template>
  <q-page padding>
    <Example :binding="number" @clickButton="onClickInside"></Example>
    <div>
      <q-btn @click="increaseNumber">Outside Button</q-btn>
    </div>

    <div>
      <q-btn @click="testNotification">Click to test a notification</q-btn>
    </div>
  </q-page>
</template>

<script>
import Example from "src/components/Example.vue";
export default {
  name: "PageCount",
  components: {
    Example,
  },
  data() {
    return {
      number: 10,
    };
  },
  methods: {
    increaseNumber() {
      this.number++;
    },
    testNotification() {
      this.$helper.notify();
    },
    onClickInside(e) {
      this.number = e;
    },
  },
};
</script>
