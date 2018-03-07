import { connect } from 'react-redux';
import { SplashNav } from './splash_nav';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions';

const msp = (state) => {
  let welcome;
  Boolean(state.session.currentUser) ? welcome = `Hey, ${state.session.currentUser.username}` : welcome = "Welcome to Slim!";
  return {
    loggedIn : Boolean(state.session.currentUser),
    welcome: welcome
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(msp,mdp)(SplashNav));
