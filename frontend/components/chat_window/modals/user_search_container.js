import { connect } from 'react-redux';

import { Search } from './search';
import { closeModal } from '../../../actions/modal_actions';
import { searchUsers, clearSearch } from '../../../actions/search_actions'

const msp = (state) => {
  return {
    type: 'User',
    header: 'Direct Messages',
    inputPlaceholder: 'Find or start a conversation',
    searchFeedHeader: 'Recent conversations'
  }
}

const mdp = (dispatch) => {
  return {
    clear: () => dispatch(clearSearch()),
    search: (queryVal) => dispatch(searchUsers(queryVal)),
    close: () => dispatch(closeModal())
  }
}

export default connect(msp,mdp)(Search)
