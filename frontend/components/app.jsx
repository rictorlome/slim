import React from 'react';
import { Route } from 'react-router-dom';


import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session/session_form_container';
import GreetingContainer from './greeting';
import { Splash } from './splash/splash';


const App = () => (
  <div>
   <Route exact path="/" component={Splash} />
   <AuthRoute path="/login" component={SessionForm} />
   <AuthRoute path="/signup" component={SessionForm} />
  </div>
);

export default App;
