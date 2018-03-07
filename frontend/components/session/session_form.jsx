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
    this.props.processForm(data).then(
      () => this.props.history.push('/')
   );
   this.setState({username: "", password: ""});
  }

  handleChange(input) {
    return (e) => {
      this.setState({[input]: e.currentTarget.value});
    };
  }

  render () {

    let lnk;
    let errs = "";
    if (this.props.formType === 'login') {
      lnk = (<Link to='/signup'>Sign Up</Link>);
    } else {
      lnk = (<Link to='/login'>Log in!</Link>);
    }
    if (this.props.errors) {
      errs = this.props.errors.session.map( (error, idx) => (
        <div className="sessionErrors" key={idx}>
          <i id="warning" class="material-icons">warning</i>
            <div className="innerSessionError">
              {error}
            </div>
        </div>
      ));
    }
    return (
      <div>
        <SplashNav />

        <div className="sessionFormContainer">
          <h2>{this.props.formType}</h2>
          <h3>{lnk}</h3>
          {errs}
          <form className="sessionForm" onSubmit={this.handleSubmit}>
            <h3>Sign in to Slim!</h3>

            <div className="sessionFormSubtitle">
              <span>Enter your</span><span className="bold"> username </span><span>and</span> <span className="bold"> password.</span>
            </div>

            <br></br>
            <input className="sessionFormInput"
              onChange={this.handleChange('username')}
              type="text"
              value={this.state.username}
              placeholder="My username">
            </input>
            <br></br>

            <input className="sessionFormInput"
              onChange={this.handleChange('password')}
              type="password"
              value={this.state.password}
              placeholder="My password">
            </input>
            <br></br>
            <input className="sessionFormInput"
              id="sessionFormSubmit"
              type="submit"
              value="Submit"/>
          </form>
        </div>


      </div>
    );
  }
}
