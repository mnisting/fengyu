import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },

    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'publishingLssues',
          component: () => import('@/views/publishingLssues/publishingLssues.vue'),
          meta: { name: '发布问题' }
        },
        {
          path: 'problemList',
          component: () => import('@/views/problemList/problemList.vue'),
          meta: { name: '问题列表' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/404.vue')
    }
  ]
});

// router.addRoute('layout', {
//   path: 'order',
//   component: () => import('@/views/order/index.vue'),
//   meta: { name1: '订单管理', name2: '订单列表' }
// })

// router.addRoute('layout', {
//   path: 'user/create',
//   component: () => import('@/views/user/create.vue'),
//   meta: { name1: '用户管理', name2: '用户创建' }
// })

export default router;
