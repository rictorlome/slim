import { connect } from 'react-redux'

import { CategoryRow } from './channel_category_row';

import { getCUsDMs } from '../../../util/selectors.js';
// import { userSearch } from ''

const msp = (state) => {
  return {
    channels: getCUsDMs(state)
  }
};

// const mdp = (dispatch) => {
//
// }

export default connect(msp,null)(CategoryRow)
