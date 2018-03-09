import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import { Search } from './search';
import { closeModal } from '../../../actions/modal_actions';
import { searchChannels, clearSearch } from '../../../actions/search_actions'
import { createChannel } from '../../../actions/channel_actions'

const msp = (state) => {
  return {
    type: 'Channel',
    header: 'Browse Channels',
    inputPlaceholder: 'Search Channels',
    searchFeedHeader: 'Channels you can join'
  }
}

const mdp = (dispatch) => {
  return {
    clear: () => dispatch(clearSearch()),
    search: (queryVal) => dispatch(searchChannels(queryVal)),
    close: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default withRouter(connect(msp,mdp)(Search))
