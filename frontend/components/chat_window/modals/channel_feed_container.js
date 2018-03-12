import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ChannelFeed } from './channel_feed';
import { closeModal } from '../../../actions/modal_actions';
import { getChannelsInSearchBuffer } from '../../../util/selectors'
import { joinChannel } from '../../../actions/channel_actions';
import { createSubscription } from '../../../util/websocket_util'

const msp = (state) => {
  return {
    channels: getChannelsInSearchBuffer(state)
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    close: () => dispatch(closeModal()),
    join: (id) => dispatch(joinChannel(id)),
    createSubscription: (channel) => createSubscription(channel,dispatch)
  }
}

export default withRouter(connect(msp,mdp)(ChannelFeed))
