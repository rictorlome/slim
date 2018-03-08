import { connect } from 'react-redux'

import { CategoryRow } from './channel_category_row';

import { getCUsPubChannels } from '../../../util/selectors.js';
// import { channelSearch } from ''

const msp = (state) => {
  return {
    channels: getCUsPubChannels(state)
  }
};

// const mdp = (dispatch) => {
//
// }
export default connect(msp,null)(CategoryRow)