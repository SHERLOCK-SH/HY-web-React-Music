import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routers from '@/router';
import store from './store';

import AppHeader from 'components/app-header';
import AppFooter from '@/components/app-footer';

const App = memo((props) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routers)}
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})

export default App