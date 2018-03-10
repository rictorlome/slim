import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { UpperNav } from './upper_nav';
import { getCurrentChannel } from '../../../util/selectors.js'

const msp = (state, ownProps) => {
  return {
    channel: getCurrentChannel(state, ownProps)
  }
}

export default withRouter(connect(msp,null)(UpperNav))
