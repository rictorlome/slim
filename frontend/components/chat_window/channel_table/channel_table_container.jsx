import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChannelTable } from './channel_table';

import { getCurrentUsersChannels } from '../../../util/selectors.js';
import { logout } from '../../../actions/session_actions';


const msp = (state, ownProps) => {
  debugger
  return {
    channels: getCurrentUsersChannels(state)
  }
}

const mdp = (dispatch) => {
  debugger
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp,mdp)(ChannelTable)
