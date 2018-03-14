import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentChannel, getDMTitleWithoutCU } from '../../../util/selectors';
import { MessageFeedHeader } from './message_feed_header';

const msp = (state, ownProps) => {
  let channel = getCurrentChannel(state, ownProps)
  return {
    is_dm: channel.is_dm,
    users_minus_you: getDMTitleWithoutCU(state, channel.id),
    author: state.entities.users[channel.creator_id].username,
    created_date: channel.created_at,
    title: channel.title
  }
}

export default withRouter(connect(msp,null)(MessageFeedHeader))
