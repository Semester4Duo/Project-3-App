<template>
  <q-card style="width: 30vw; height: auto; border-radius: 0">
    <div
      class="color-bar"
      :style="{
        'background-color': course.color,
        'border-radius': '0px 0px 100px 100px',
      }"
    ></div>
    <img :src="course.image" class="q-pa-lg" style="padding-bottom: 5px" />
    <q-card-section class="q-pa-md" style="padding-left: 10px">
      <div
        v-if="course.title.split(' ')[0] != null"
        class="text-h7"
        style="font-size: 11px"
      >
        {{ course.title.split(" ")[0] }}
      </div>
      <div
        v-if="course.title.split(' ')[1] != null"
        class="text-h7"
        style="font-size: 11px"
      >
        {{ course.title.split(" ")[1] }}
      </div>
      <Progress :progress="course.progress" :steps="course.steps" />
    </q-card-section>
  </q-card>
</template>

<script>
import Progress from "src/components/Progress.vue";

const exampleCourse = {
  title: "Applied Probability",
  color: "#E0ABF9",
  image: "assets/chemistry/003-structure.svg",
  steps: 6,
  progress: 5,
};
export default {
  components: {
    Progress,
  },
  props: {
    course: {
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
