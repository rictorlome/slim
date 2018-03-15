import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChatInput } from './chat_input';
import { getDMTitleWithoutCU } from '../../../util/selectors'

const msp = (state, ownProps) => {
  let channel = state.entities.channels[ownProps.match.params.channelId]
  return {
    channel: channel,
    user: state.session.currentUser,
    dmTitle: getDMTitleWithoutCU(state, channel.id)
  }
}
const mdp = (dispatch) => {
  return {
    openSmile: () => dispatch(openModal('EmojiPickerText'))
  }
}

export default withRouter(connect(msp,mdp)(ChatInput))
