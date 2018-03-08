import { connect } from 'react-redux';

import { Splash } from './splash';

import { pullRandomChannel } from '../../util/selectors.js';

const msp = (state) => {
  debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    randomChannel: pullRandomChannel(state)
  }
}

export default connect(msp,null)(Splash)
