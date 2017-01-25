import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './pages/home';
import LandingPage from './pages/landing';
import NotFoundPage from './pages/notFound';
import SettingsPage from './pages/settings';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="app">
      <IndexRoute component={HomePage}/>
    </Route>
      <Route path="settings" component={SettingsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
