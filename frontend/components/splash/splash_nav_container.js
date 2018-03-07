import { connect } from 'react-redux';
import { SplashNav } from './splash_nav';
import { withRouter } from 'react-router-dom';

import { logout, createGuest } from '../../actions/session_actions';

const msp = (state) => {
  let welcome;
  // ${state.entities.users[state.session.currentUser].username}
  Boolean(state.session.currentUser) ? welcome = `Hey` : welcome = "Welcome to Slim!";
  return {
    loggedIn : Boolean(state.session.currentUser),
    welcome: welcome
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createGuest: () => dispatch(createGuest())
  };
};

export default withRouter(connect(msp,mdp)(SplashNav));
