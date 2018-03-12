import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getUsersInSearchBuffer } from '../../../util/selectors'

import { UserFeed } from './user_feed';
import { closeModal } from '../../../actions/modal_actions';

import { joinChannel } from '../../../actions/channel_actions';
import { selectUser } from '../../../actions/select_actions';

const msp = (state) => {
  return {
    users: getUsersInSearchBuffer(state),
    numleft: 8 - state.ui.selected.length
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    close: () => dispatch(closeModal()),
    join: (id) => dispatch(joinChannel(id)),
    select: (id) => dispatch(selectUser(id))
  }
}

export default withRouter(connect(msp,mdp)(UserFeed))
