import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChannelTable } from './channel_table';

import { getCurrentUsersChannels, getCUUsername } from '../../../util/selectors.js';
import { logout } from '../../../actions/session_actions';
import { createSubscriptions, createUserSub } from '../../../util/websocket_util.js'
import { updateUserImage } from '../../../actions/user_actions.js'

const msp = (state, ownProps) => {
  return {
    channels: getCurrentUsersChannels(state),
    username: getCUUsername(state),
    cu: state.session.currentUser
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createSubscriptions: (channels) => createSubscriptions(channels,dispatch),
    createUserSub: (cu) => createUserSub(cu, dispatch),
    updateUserImage: (formData,cu) => dispatch(updateUserImage(formData,cu))
  }
}

export default withRouter(connect(msp,mdp)(ChannelTable))
