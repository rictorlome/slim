import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DayBox } from './day_box';
import { getChannelsMessagesDays } from '../../../util/selectors';

export const msp = (state, ownProps) => {
  debugger
  let channel = state.entities.channels[parseInt(ownProps.match.params.channelId)]
  return {
    days: getChannelsMessagesDays(state,channel)
  }
}

export default withRouter(connect(msp,null)(DayBox))
