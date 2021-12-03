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
      <div class="text-h6">Your Courses</div>
      <div class="text-subtitle2" style="color: #666; font-weight: normal">
        Courses you've worked on recently
      </div>
      <div
        class="row no-wrap items-start q-gutter-sm"
        style="padding-top: 8px; padding-bottom: 8px"
      >
        <Course
          v-for="course in courses.slice(0, 2)"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
    <div class="q-pa-md" style="padding-top: 10px">
      <div class="text-h6" style="margin-bottom: 5px">Browse Courses</div>
      <q-input filled label="Search courses and topics">
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
      <div class="text-h6" style="font-size: 16px; margin-top: 5px">
        Popular Courses
      </div>
      <div class="row no-wrap items-start q-gutter-sm" style="padding-top: 8px">
        <Course
          v-for="course in courses.slice(0, 3)"
          :key="course.id"
          :course="course"
        />
      </div>
      <div class="text-h6" style="font-size: 16px; margin-top: 5px">
        Recommended Courses
      </div>
      <div class="row no-wrap items-start q-gutter-sm" style="padding-top: 8px">
        <Course
          v-for="course in courses.slice(0, 3)"
          :key="course.id"
          :course="course"
        />
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
    steps: 6,
    progress: 5,
  },
  {
    id: 1,
    title: "Applied Probability",
    color: "#FE7058",
    image: "chemistry/059-experiment.svg",
    steps: 6,
    progress: 5,
  },
  {
    id: 2,
    title: "Applied Probability",
    color: "#82FF82",
    image: "chemistry/009-flask.svg",
    steps: 6,
    progress: 5,
  },
];

import Course from "src/components/Course.vue";

export default {
  name: "Courses",
  components: {
    Course,
  },
  setup() {
    return {
      courses: courseList,
    };
  },
};
</script>

<style lang="scss"></style>
