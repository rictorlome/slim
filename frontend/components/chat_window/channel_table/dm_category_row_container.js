import { connect } from 'react-redux'

import { CategoryRow } from './channel_category_row';

import { getCUsDMs } from '../../../util/selectors.js';
import { openModal } from '../../../actions/modal_actions.js';


const msp = (state) => {
  return {
    channels: getCUsDMs(state),
    buttonTitle: 'Open a direct message'
  }
};

const mdp = (dispatch) => {
  return {
    openSearch: () => dispatch(openModal('UserSearch'))
  }
}

export default connect(msp,mdp)(CategoryRow)
