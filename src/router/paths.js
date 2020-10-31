import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true
    },
    redirect: {
      path: '/dashboard'
    }
  },

  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false
    },
    component: () =>
      import(/* webpackChunkName: "routes" */ '@/pages/LoginHome.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/dashboard')
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        component: () => import('@/components/LoginForm.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    meta: {
      name: 'Dashboard View',
      requiresAuth: true
    },
    component: () => import('@/pages/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/components/DashViews/Dashboard.vue')
      },
      {
        path: 'upload-docs',
        meta: {
          name: 'Upload-docs',
          requiresAuth: true
        },
        component: () => import('@/components/DashViews/UploadDocs.vue')
      },
      {
        path: 'search',
        meta: {
          name: 'Search-panel',
          requiresAuth: true
        },
        component: () => import('@/components/DashViews/Search.vue')
      },
      {
        path: 'notifications',
        meta: {
          name: 'Notifications',
          requiresAuth: true
        },
        component: () => import('@/components/DashViews/Notifications.vue')
      }
    ]
  }
]
