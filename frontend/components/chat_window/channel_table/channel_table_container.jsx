import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChannelTable } from './channel_table';

import { getCurrentUsersChannels, getCUUsername } from '../../../util/selectors.js';
import { logout } from '../../../actions/session_actions';
import { createSubscriptions } from '../../../util/websocket_util.js'

const msp = (state, ownProps) => {
  return {
    channels: getCurrentUsersChannels(state),
    username: getCUUsername(state)
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createSubscriptions: (channels) => createSubscriptions(channels,dispatch)
  }
}

export default withRouter(connect(msp,mdp)(ChannelTable))
