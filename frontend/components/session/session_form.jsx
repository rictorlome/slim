import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
      errs = this.props.errors.session.map( (error, idx) => (<h3 key={idx}>{error}</h3>));
    }
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <h3>{lnk}</h3>
        {errs}
        <form onSubmit={this.handleSubmit}>
          <label>Username:
          <input onChange={this.handleChange('username')} type="text" value={this.state.username}></input>
          </label><br></br>
        <label>Password:
          <input onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
          </label><br></br>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
