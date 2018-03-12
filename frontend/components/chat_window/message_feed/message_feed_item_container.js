import { connect } from 'react-redux';

import { MessageFeedItem } from './message_feed_item';

const msp = (state) => {
  return {
    author: (id) => state.entities.users[id].username
  }
}

export default connect(msp,null)(MessageFeedItem)
