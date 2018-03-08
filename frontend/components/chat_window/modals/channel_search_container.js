import { connect } from 'react-redux';

import { Search } from './search';
import { closeModal } from '../../../actions/modal_actions';
import { searchChannels } from '../../../actions/search_actions'

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
    search: (queryVal) => dispatch(searchChannels(queryVal)),
    close: () => dispatch(closeModal()),
  }
}

export default connect(msp,mdp)(Search)
