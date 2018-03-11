import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { MessageFeed } from './message_feed';

import { getCurrentChannelsMessages } from '../../../util/selectors'
import { fetchMessages } from '../../../actions/message_actions'

const msp = (state, ownProps) => {
  return {
    messages: getCurrentChannelsMessages(state, ownProps)
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    fetchMessages: () => dispatch(fetchMessages(ownProps.match.params.channelId))
  }
}

export default withRouter(connect(msp,mdp)(MessageFeed))
