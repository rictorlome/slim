import { connect } from 'react-redux';

import { createGuest } from '../../actions/session_actions.js';
import { Splash } from './splash';

const mdp = (dispatch) => {
  return {
    createGuest: () => dispatch(createGuest())
  };
};

export default connect(null,mdp)(Splash)
