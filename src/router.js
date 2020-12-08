import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '',
      component: () => import('./views/Auth.vue'),
      // ======================
      // Theme routes / pages
      // ======================
      children: [
        {
          path: '/login',
          name: 'Login',
          index: 1.1,
          component: () => import('./views/authentication/LoginRegister.vue'),
        }
      ]
    },
    {
      path: '',
      component: () => import('./views/MainContainer.vue'),
      // ======================
      // Theme routes / pages
      // ======================
      children: [
        {
          path: '/home',
          name: 'Home',
          index: 2.1,
          component: () => import('./views/layout/Home.vue'),
        },
        {
          path: '/about',
          name: 'About',
          index: 2.2,
          component: () => import('./views/layout/About.vue'),
        },
        {
          path: '/blog',
          name: 'Blog',
          index: 2.3,
          component: () => import('./views/layout/Blog.vue'),
        },
        {
          path: '/language',
          name: 'Language',
          index: 2.4,
          component: () => import('./views/layout/Language.vue'),
        },
        {
          path: '/contact',
          name: 'Contact',
          index: 2.5,
          component: () => import('./views/layout/Contact.vue'),
        }
        
      ]
    },

  ]
})