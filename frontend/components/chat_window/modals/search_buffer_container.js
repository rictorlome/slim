import { connect } from 'react-redux';

import { getSelectedUsers } from '../../../util/selectors'
import { SearchBuffer } from './search_buffer'

import { unselectUser } from '../../../actions/select_actions';

const msp = (state) => {
  return {
    selectedUsers: getSelectedUsers(state)
  }
}

const mdp = (dispatch) => {
  return {
    unselectUser: (id) => dispatch(unselectUser(id))
  }
}

export default connect(msp,mdp)(SearchBuffer)
