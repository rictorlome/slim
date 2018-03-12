import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { CategoryRow } from './channel_category_row';

import { getCUsPubChannels, findGeneral } from '../../../util/selectors.js';
import { openModal } from '../../../actions/modal_actions.js';
import { leaveChannel } from '../../../actions/channel_actions';

const msp = (state) => {
  const x = {
    channels: getCUsPubChannels(state),
    buttonTitle: 'Browse all channels',
    general: findGeneral(state)
  }
  return x;
};

const mdp = (dispatch, ownProps) => {
  return {
    openSearch: () => dispatch(openModal('ChannelSearch')),
    leave: (id) => {
      App['room' + id].unsubscribe();
      return dispatch(leaveChannel(id));
    }
  }
}
export default withRouter(connect(msp,mdp)(CategoryRow))
