import React from 'react';
import { Redirect } from 'react-router-dom';

import Discover from '@/pages/discover';
import Friend from '@/pages/friend';
import Mine from '@/pages/mine';
import Recommend from '@/pages/discover/c-pages/recommend'

// const Discover = React.lazy(() => import("@/pages/discover"))
// const Recommend = React.lazy(_=>import("../pages/discover/c-pages/recommend"))

const routers = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
    ]
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  }
];

export default routers;