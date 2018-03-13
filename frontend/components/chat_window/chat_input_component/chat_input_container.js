import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChatInput } from './chat_input';


const msp = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    user: state.session.currentUser
  }
}
const mdp = (dispatch) => {
  return {
    openSmile: () => dispatch(openModal('EmojiPickerText'))
  }
}

export default withRouter(connect(msp,mdp)(ChatInput))
