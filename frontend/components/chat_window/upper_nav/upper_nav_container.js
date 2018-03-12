import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { UpperNav } from './upper_nav';
import { getCurrentChannel, getCurrentChannelsCount } from '../../../util/selectors.js'

const msp = (state, ownProps) => {
  return {
    channel: getCurrentChannel(state, ownProps),
    count: getCurrentChannelsCount(state, ownProps)
  }
}

export default withRouter(connect(msp,null)(UpperNav))
