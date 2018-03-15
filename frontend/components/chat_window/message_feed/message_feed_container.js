import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { MessageFeed } from './message_feed';

import { getCurrentChannelsMessages, getChannelsMessagesDays, getAllDaysMessages } from '../../../util/selectors'
import { fetchMessages } from '../../../actions/message_actions'

const msp = (state, ownProps) => {
  let channel = state.entities.channels[parseInt(ownProps.match.params.channelId)]
  let d = getChannelsMessagesDays(state,channel);
  return {
    messages: getCurrentChannelsMessages(state, ownProps),
    days: getChannelsMessagesDays(state,channel),
    getDaysMessages: (messages, date) => getAllDaysMessages(messages,date)
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    fetchMessages: () => dispatch(fetchMessages(ownProps.match.params.channelId))
  }
}

export default withRouter(connect(msp,mdp)(MessageFeed))
