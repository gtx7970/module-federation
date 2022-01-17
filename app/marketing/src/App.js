import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route component={Landing} path='/' exact></Route>
            <Route component={Pricing} exact path='/pricing'></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
