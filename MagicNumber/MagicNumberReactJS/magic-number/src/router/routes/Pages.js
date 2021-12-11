import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/login',
    component: lazy(() => import('../../views/pages/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/pages/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/profile',
    component: lazy(() => import('../../views/pages/profile'))
  },
  {
    path: '/pages/account-settings',
    component: lazy(() => import('../../views/pages/account-settings'))
  },
  {
    path: '/find-number',
    exact: true,
    component: lazy(() => import('../../views/number'))
  },
  {
    path: '/pages/article/create',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/create'))
  },
  {
    path: '/pages/article/list',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/list'))
  },
  {
    path: '/pages/article/detail/:slug',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/details')),
    meta: {
      navLink: '/pages/article/detail'
    }
  },
  {
    path: '/pages/article/detail',
    exact: true,
    component: () => <Redirect to='/pages/article/detail/1' />
  },
  {
    path: '/pages/article/edit/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/edit')),
    meta: {
      navLink: '/pages/article/edit'
    }
  },
  {
    path: '/pages/article/edit',
    exact: true,
    component: () => <Redirect to='/pages/article/edit/1' />
  },
  {
    path: '/misc/coming-soon',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/maintenance',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes
