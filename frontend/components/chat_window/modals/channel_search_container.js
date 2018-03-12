import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import { Search } from './search';
import { closeModal } from '../../../actions/modal_actions';
import { searchChannels, clearSearch } from '../../../actions/search_actions'
import { createChannel } from '../../../actions/channel_actions'
import { createSubscription } from '../../../util/websocket_util.js'
import { receiveMessage } from '../../../actions/message_actions';

const msp = (state) => {
  return {
    type: 'Channel',
    header: 'Browse channels',
    inputPlaceholder: 'Search channels',
    searchFeedHeader: 'Channels you can join'
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    clear: () => dispatch(clearSearch()),
    search: (queryVal) => dispatch(searchChannels(queryVal)),
    close: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    createSubscription: (channel) => createSubscription(channel,dispatch)
  }
}

export default withRouter(connect(msp,mdp)(Search))
