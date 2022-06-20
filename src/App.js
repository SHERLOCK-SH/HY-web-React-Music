import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routers from '@/router';

import AppHeader from 'components/app-header';
import AppFooter from '@/components/app-footer';

const App = memo((props) => {
  return (
    <HashRouter>
      <AppHeader />
      {renderRoutes(routers)}
      <AppFooter />
    </HashRouter>
  )
})

export default App