<template>
  <q-page>
    <div
      class="q-pa-md"
      style="
        background-image: url('/chemistry/background.png');
        background-color: #f5f5f5;
        padding-bottom: 25px;
      "
    >
      <div class="text-h6">Your quizzes</div>
      <div class="text-subtitle2" style="color: #666; font-weight: normal">
        Quizzes you've completed recently
      </div>
      <div
        class="row no-wrap items-start q-gutter-sm"
        style="padding-top: 8px; padding-bottom: 8px"
      >
        <Quiz v-for="quiz in quizzes.slice(0, 2)" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
    <div class="q-pa-md" style="padding-top: 10px">
      <div class="text-h6" style="margin-bottom: 5px">Browse quizzes</div>
      <q-input filled label="Search courses and topics">
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
      <div class="text-h6" style="font-size: 16px; margin-top: 5px">
        Popular quizzes
      </div>
      <div class="row no-wrap items-start q-gutter-sm" style="padding-top: 8px">
        <Quiz v-for="quiz in quizzes.slice(0, 3)" :key="quiz.id" :quiz="quiz" />
      </div>
      <div class="text-h6" style="font-size: 16px; margin-top: 5px">
        Recommended quizzes
      </div>
      <div class="row no-wrap items-start q-gutter-sm" style="padding-top: 8px">
        <Quiz v-for="quiz in quizzes.slice(0, 3)" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
  </q-page>
</template>

<script>
const courseList = [
  {
    id: 0,
    title: "Applied Probability",
    color: "#E0ABF9",
    image: "chemistry/003-structure.svg",
    progress: true,
  },
  {
    id: 1,
    title: "Applied Probability",
    color: "#FE7058",
    image: "chemistry/059-experiment.svg",
    progress: false,
  },
  {
    id: 2,
    title: "Applied Probability",
    color: "#82FF82",
    image: "chemistry/009-flask.svg",
    progress: false,
  },
];

import Quiz from "src/components/Quiz.vue";

export default {
  name: "Courses",
  components: {
    Quiz,
  },
  setup() {
    return {
      quizzes: courseList,
    };
  },
};
</script>

<style lang="scss"></style>
