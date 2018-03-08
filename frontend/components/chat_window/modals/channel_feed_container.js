import { connect } from 'react-redux';

import { ChannelFeed } from './channel_feed';
import { closeModal } from '../../../actions/modal_actions';
import { getChannelsInSearchBuffer } from '../../../util/selectors'


const msp = (state) => {
  return {
    channels: getChannelsInSearchBuffer(state)
  }
}

const mdp = (dispatch) => {
  return {
    close: () => dispatch(closeModal()),
  }
}

export default connect(msp,mdp)(ChannelFeed)
