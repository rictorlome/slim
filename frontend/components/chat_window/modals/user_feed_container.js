import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getUsersInSearchBuffer } from '../../../util/selectors'

import { UserFeed } from './user_feed';
import { closeModal } from '../../../actions/modal_actions';

import { joinChannel } from '../../../actions/channel_actions';

const msp = (state) => {
  return {
    users: getUsersInSearchBuffer(state)
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    close: () => dispatch(closeModal()),
    join: (id) => dispatch(joinChannel(id))
  }
}

export default withRouter(connect(msp,mdp)(UserFeed))
