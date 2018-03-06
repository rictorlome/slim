import { connect } from 'react-redux';
import React from 'react';

import { logout } from '../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


const Greeting = (props) => {
  return (
    <div>
      <div> Greetings! {props.currentUser.username}</div>
      <button onClick={()=>props.logout()}>Logout</button>
    </div>
  );
};

export default connect(msp,mdp)(Greeting);
