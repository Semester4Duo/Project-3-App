<template>
  <q-card style="width: 30vw; height: auto; border-radius: 0">
    <div
      class="color-bar"
      :style="{
        'background-color': quiz.color,
        'border-radius': '0px 0px 100px 100px',
      }"
    ></div>
    <img :src="quiz.image" class="q-pa-lg" style="padding-bottom: 5px" />
    <q-card-section
      class="q-pa-md"
      style="padding-left: 10px; padding-right: 10px"
    >
      <div
        v-if="quiz.title.split(' ')[0] != null"
        class="text-h7"
        style="font-size: 11px"
      >
        {{ quiz.title.split(" ")[0] }}
      </div>
      <div
        v-if="quiz.title.split(' ')[1] != null"
        class="text-h7"
        style="font-size: 11px"
      >
        {{ quiz.title.split(" ")[1] }}
      </div>
      <SimpleProgress :has-done-before="quiz.progress" />
    </q-card-section>
  </q-card>
</template>

<script>
import SimpleProgress from "src/components/SimpleProgress.vue";

const exampleCourse = {
  title: "Applied Probability",
  color: "#E0ABF9",
  image: "assets/chemistry/003-structure.svg",
  steps: 6,
  progress: 5,
};
export default {
  components: {
    SimpleProgress,
  },
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
div.color-bar {
  width: 100%;
  height: 15px;
}
</style>
