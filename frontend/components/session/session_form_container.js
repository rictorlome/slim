import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { SessionForm } from './session_form';
import { Router, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {errors: state.errors, formType: ownProps.match.path.slice(1)};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path.slice(1) === 'signup') {
    return {
      processForm: (user) => dispatch(signup(user)),
      clearSessionErrors: () => dispatch(clearSessionErrors())
    };
  } else {
    return {
      processForm: (user) => dispatch(login(user)),
      clearSessionErrors: () => dispatch(clearSessionErrors())
    };
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
