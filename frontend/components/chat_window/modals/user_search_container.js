import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { Search } from './search';
import { closeModal } from '../../../actions/modal_actions';
import { searchUsers, clearSearch } from '../../../actions/search_actions'
import { createDM } from '../../../actions/channel_actions'
import { createSubscription } from '../../../util/websocket_util.js'
import { selectedUsersInDm, isCUAMember } from '../../../util/selectors'
import { joinChannel } from '../../../actions/channel_actions';

const msp = (state) => {
  return {
    type: 'User',
    header: 'Direct Messages',
    inputPlaceholder: 'Find or start a conversation',
    searchFeedHeader: 'Recent conversations',
    active: state.ui.selected.length > 0,
    destination: selectedUsersInDm(state),
    isCUAMemberOf: (channel) => isCUAMember(state,channel)
  }
}

const mdp = (dispatch) => {
  return {
    clear: () => dispatch(clearSearch()),
    search: (queryVal) => dispatch(searchUsers(queryVal)),
    close: () => dispatch(closeModal()),
    createDM: () => dispatch(createDM()),
    createSubscription: (channel) => createSubscription(channel,dispatch),
    join: (id) => dispatch(joinChannel(id)),
  }
}

export default withRouter(connect(msp,mdp)(Search))
