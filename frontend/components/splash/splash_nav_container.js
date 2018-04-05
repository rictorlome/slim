import { connect } from 'react-redux';
import { SplashNav } from './splash_nav';
import { withRouter } from 'react-router-dom';

import { logout, createGuest } from '../../actions/session_actions';

const msp = (state) => {
  return {
    loggedIn : Boolean(state.session.currentUser),
  };
};

const mdp = (dispatch) => {
  return {
    createGuest: () => dispatch(createGuest())
  };
};

export default withRouter(connect(msp,mdp)(SplashNav));
