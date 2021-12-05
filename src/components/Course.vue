<template>
  <q-card
    style="width: 30vw; height: auto; border-radius: 0"
    @click="dialog = true"
  >
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
      <Progress
        :progress="course.progress"
        :steps="course.steps"
        :color="course.color"
      />
    </q-card-section>
  </q-card>

  <q-dialog
    v-model="dialog"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="dialog bg-white q-pa-md">
      <div style="display: flex; justify-content: none">
        <div
          class="text-h6 text-black"
          style="
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            position: absolute;
          "
        >
          {{ course.title }}
        </div>
        <q-btn
          v-close-popup
          class="text-black q-pa-none q-ma-none"
          dense
          flat
          style="align-self: center; height: 32px"
          icon="r_arrow_back"
        >
        </q-btn>
      </div>

      <img
        :src="course.image"
        style="
          width: 100%;
          padding-left: 40%;
          padding-right: 40%;
          padding-top: 5%;
          padding-bottom: 0;
        "
      />

      <div class="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </div>
    </div>
  </q-dialog>
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
    hasDialogOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: this.hasDialogOpen,
    };
  },
};
</script>

<style lang="scss">
div.color-bar {
  width: 100%;
  height: 15px;
}

div.dialog {
  max-height: none !important;
  width: 100%;
  height: 100%;
}

.q-dialog__inner {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
