import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentChannel, getDMTitleWithoutCU } from '../../../util/selectors';
import { MessageFeedHeader } from './message_feed_header';

const msp = (state, ownProps) => {
  let author;
  let channel = getCurrentChannel(state, ownProps)
  channel.title === "general" ? author = "admin" : author = state.entities.users[channel.creator_id].username
  return {
    is_dm: channel.is_dm,
    users_minus_you: getDMTitleWithoutCU(state, channel.id),
    author: author,
    created_date: channel.created_at,
    title: channel.title
  }
}

export default withRouter(connect(msp,null)(MessageFeedHeader))
