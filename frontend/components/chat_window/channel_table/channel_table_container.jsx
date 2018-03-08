import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChannelTable } from './channel_table';

import { getCurrentUsersChannels, getCUUsername } from '../../../util/selectors.js';
import { logout } from '../../../actions/session_actions';


const msp = (state, ownProps) => {
  return {
    channels: getCurrentUsersChannels(state),
    username: getCUUsername(state)
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp,mdp)(ChannelTable)
