import { connect } from 'react-redux'

import { CategoryRow } from './channel_category_row';

import { getCUsDMs, findGeneral } from '../../../util/selectors.js';
import { openModal } from '../../../actions/modal_actions.js';
import { leaveChannel } from '../../../actions/channel_actions';


const msp = (state) => {
  return {
    channels: getCUsDMs(state),
    buttonTitle: 'Open a direct message',
    general: findGeneral(state)
  }
};

const mdp = (dispatch) => {
  return {
    openSearch: () => dispatch(openModal('UserSearch')),
    leave: (id) => dispatch(leaveChannel(id))
  }
}

export default connect(msp,mdp)(CategoryRow)
