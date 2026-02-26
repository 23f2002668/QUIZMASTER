import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },

    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue'),
    },

    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
    },

    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('../views/ForgotPassword.vue'),
    },

    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import('../views/Leaderboard.vue'),
    },

    {
      path: '/adminDashboard/:email',
      name: 'adminDashboard',
      component: () => import('../views/AdminDashboard.vue'),
    },

    {
      path: '/userDashboard/:email',
      name: 'userDashboard',
      component: () => import('../views/UserDashboard.vue'),
    },

    {
      path: '/quiz/:mail',
      name: 'quiz',
      component: () => import('../views/Quiz.vue'),
    },

    {
      path: '/timedQuiz/:subject/:topic/:quizname/:name/:username/:mail',
      name: 'timedQuiz',
      component: () => import('../views/timedQuiz.vue'),
    },

    {
      path: '/quizTopics/:subject/:name/:username/:mail',
      name: 'quizTopics',
      component: () => import('../views/QuizTopics.vue'),
    },

    {
      path: '/summary/:name/:email',
      name: 'summary',
      component: () => import('../views/Summary.vue'),
    },

    {
      path: '/newQuiz/:email',
      name: 'newQuiz',
      component: () => import('../views/NewQuiz.vue'),
    },

    {
      path: '/addQuiz/:subject/:chapter/:quiz',
      name: 'addQuiz',
      component: () => import('../views/AddQuiz.vue'),
    },

    {
      path: '/addChapter/:subject/:mail',
      name: 'addChapter',
      component: () => import('../views/Chapters.vue'),
    },

    {
      path: '/chapterQuiz/:subject/:chapter/:mail',
      name: 'chapterQuiz',
      component: () => import('../views/ChapterQuiz.vue'),
    },

    {
      path: '/editQuizData/:subject/:chapter/:quiz/:mail',
      name: 'editQuizData',
      component: () => import('../views/EditQuizData.vue'),
    },

    {
      path: '/remove/:mail',
      name: 'remove',
      component: () => import('../views/Remove.vue'),
    }
  ],
})

export default router
