import { connect } from 'react-redux';

import { Splash } from './splash';

import { findGeneral } from '../../util/selectors.js';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    randomChannel: findGeneral(state)
  }
}

export default connect(msp,null)(Splash)
