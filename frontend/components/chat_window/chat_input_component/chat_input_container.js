import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ChatInput } from './chat_input';

const msp = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    user: state.session.currentUser
  }
}

export default withRouter(connect(msp,null)(ChatInput))
