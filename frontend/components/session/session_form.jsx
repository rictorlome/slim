import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
import SplashNav from '../splash/splash_nav_container';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let u;
    props.location.state === undefined ? u = "" : u = props.location.state.username;
    this.state = {
      username: u,
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = merge({}, this.state);
    this.props.processForm(data).then( () => {
      this.setState({username: "", password: ""});
    })
  }

  handleChange(input) {
    return (e) => {
      this.setState({[input]: e.currentTarget.value});
    };
  }

  componentWillUnmount() {
    this.props.clearSessionErrors()
  }

  render () {
    let errs = "";
    if (this.props.errors) {
      errs = this.props.errors.session.map( (error, idx) => (
        <div className="sessionErrors" key={idx}>
          <i id="warning" className="material-icons">warning</i>
            <div className="innerSessionError">
              {error}
            </div>
        </div>
      ));
    }
    let submitButton;
    this.props.formType === 'login' ? submitButton = 'Log in' : submitButton = 'Sign up';
    return (
      <div>
        <SplashNav />
        <div className="sessionFormContainer">
          {errs}
          <form className="sessionForm" onSubmit={this.handleSubmit}>
            {this.props.formType === 'login' && (<h3>Log in to Slim!</h3>)}
            {this.props.formType === 'signup' && (<h3>Sign up for Slim!</h3>)}

            <div className="sessionFormSubtitle">
              <span>Enter your</span><span className="bold"> username </span><span>and</span> <span className="bold"> password.</span>
            </div>

            <input className="sessionFormInput"
              onChange={this.handleChange('username')}
              type="text"
              value={this.state.username}
              placeholder="My username">
            </input>

            <input className="sessionFormInput"
              onChange={this.handleChange('password')}
              type="password"
              value={this.state.password}
              placeholder="My password">
            </input>

            <input className="sessionFormInput"
              id="sessionFormSubmit"
              type="submit"
              value={submitButton}/>
            <div className="alternativeLinks">
              {this.props.formType === 'login' && (<Link to='/signup'>Sign up instead!</Link>)}
              {this.props.formType === 'signup' && (<Link to='/login'>Log in instead!</Link>)}
            </div>
          </form>
        </div>


      </div>
    );
  }
}
