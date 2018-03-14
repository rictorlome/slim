import { connect } from 'react-redux';

import { MessageFeedItem } from './message_feed_item';

const msp = (state) => {
  return {
    author: (id) => state.entities.users[id].username,
    image_url: (id) => state.entities.users[id].image_url
  }
}

export default connect(msp,null)(MessageFeedItem)
