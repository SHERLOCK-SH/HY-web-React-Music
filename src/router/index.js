import React from 'react';
import { Redirect } from "react-router-dom";

import Discover from '@/pages/discover';
import Friend from '@/pages/friend';
import Mine from '@/pages/mine';
import Recommend from '@/pages/discover/c-pages/recommend';
import Artist from '@/pages/discover/c-pages/artist';
import Djradio from '@/pages/discover/c-pages/djradio';
import Ranking from '@/pages/discover/c-pages/ranking';
import Album from '@/pages/discover/c-pages/album';
import Songs from '@/pages/discover/c-pages/songs';

// const Discover = React.lazy(() => import("@/pages/discover"))
// const Recommend = React.lazy(_=>import("../pages/discover/c-pages/recommend"))

const routers = [
  {
    path: '/',
    exact: true,
    // component: Discover,
    render:()=>(
      <Redirect to={"/discover"} />
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
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/djradio",
        component: Djradio,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/songs",
        component: Songs,
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