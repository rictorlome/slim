import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { CategoryRow } from './channel_category_row';

import { getCUsPubChannels } from '../../../util/selectors.js';
import { openModal } from '../../../actions/modal_actions.js';
import { selectChannel } from '../../../actions/select_actions.js';
// import { channelSearch } from ''

const msp = (state) => {
  return {
    channels: getCUsPubChannels(state),
    buttonTitle: 'Browse all channels'
  }
};

const mdp = (dispatch, ownProps) => {
  return {
    openSearch: () => dispatch(openModal('ChannelSearch')),
    selectChannel: (id) => dispatch(selectChannel(ownProps.match.params.channelId))
  }
}
export default withRouter(connect(msp,mdp)(CategoryRow))
