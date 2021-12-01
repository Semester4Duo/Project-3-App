const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "courses" },
      { path: "topic", component: () => import("pages/Topic.vue") },
      { path: "courses", component: () => import("pages/Courses.vue") },
      { path: "quizzes", component: () => import("pages/Quizzes.vue") },
      { path: "profile", component: () => import("pages/Profile.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
