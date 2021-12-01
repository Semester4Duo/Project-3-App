<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-tabs class="bg-primary text-dark custom_style_tab_bar">
        <q-route-tab
          name="Topic"
          to="/topic"
          :icon="currentRouteName == '/topic'? 'img:icons/propaganda_color.svg':'img:icons/propaganda.svg'"
          label="Topic"
          exact
        />
        <q-route-tab
          name="Courses"
          to="/courses"
          :icon="currentRouteName == '/courses'? 'img:icons/graduation_color.svg':'img:icons/graduation.svg'"
          label="Courses"
          exact
        />
        <q-route-tab
          name="Quizzes"
          to="/quizzes"
          :icon="currentRouteName == '/quizzes'? 'img:icons/book_color.svg':'img:icons/book.svg'"
          label="Quizzes"
          
        />
        <q-route-tab
          name="Profile"
          to="/profile"
          :icon="currentRouteName == '/profile'? 'img:icons/parrot_color.svg':'img:icons/parrot.svg'"
          label="Profile"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<style>
.custom_style_tab_bar .q-tab__label{
 color: var(--q-info) !important
}
.custom_style_tab_bar .q-tab--active .q-tab__label{
 color: var(--q-dark) !important
}

.custom_style_tab_bar .q-tab--active .q-tab__indicator{
 color: var(--q-info) !important;
 height: 7px;
 border-radius: 25px 25px 0 0;
}

</style>


<script>

import { useRoute } from 'vue-router';
export default {
   name: "MainLayout",
   computed: {
    currentRouteName() {
        return this.$router.currentRoute.value.path;
    }
}
  
};
</script>
