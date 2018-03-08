import { connect } from 'react-redux'

import { CategoryRow } from './channel_category_row';

import { getCUsPubChannels } from '../../../util/selectors.js';
import { openModal } from '../../../actions/modal_actions.js';
// import { channelSearch } from ''

const msp = (state) => {
  return {
    channels: getCUsPubChannels(state),
    buttonTitle: 'Browse all channels'
  }
};

const mdp = (dispatch) => {
  return {
    openSearch: () => dispatch(openModal('ChannelSearch'))
  }
}
export default connect(msp,mdp)(CategoryRow)
