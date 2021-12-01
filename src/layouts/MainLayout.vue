<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs class="text-teal bg-dark">
        <q-route-tab
          name="Topic"
          to="/topic"
          icon="img:icons/propaganda.svg"
          label="Topic"
          exact
        />
        <q-route-tab
          name="Courses"
          to="/courses"
          icon="img:icons/graduation.svg"
          label="Courses"
          exact
        />
        <q-route-tab
          name="Quizzes"
          to="/quizzes"
          icon="img:icons/book.svg"
          label="Quizzes"
          exact
        />
        <q-route-tab
          name="Profile"
          to="/profile"
          icon="img:icons/parrot.svg"
          label="Profile"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
