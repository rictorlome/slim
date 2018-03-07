import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import SplashNav from './splash_nav_container';

export class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      redirect: false
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateRedirect = this.updateRedirect.bind(this);
  }
  updateUsername(e) {
    this.setState({username: e.currentTarget.value});
  }
  updateRedirect(e) {
    this.setState({redirect: true});
  }
  render () {
    return (
      <div>
        {
          this.state.redirect && <Redirect to={{
            pathname: '/signup',
            state: { username: this.state.username}
          }}/>
        }
        <SplashNav />
        <div className="splashbody">
        <div className="splashimagecontainer">
          <div className="splashimage">
            <img src={window.mainsplashpic}></img>
          </div>
        </div>

        <div className="splashform">
          <h3> Send your team messages! </h3>
          <div className="splashtext">
            Slim is a chat app!
            Things you can do with Slim include logging in, logging out,
            making channels, making direct messages, sending messages,
            searching users, searching channels, and that's about it!
          </div>
          <span>
            <input placeholder="Username" value={this.state.username} onChange={this.updateUsername} />
            <button
              className="getStartedButton"
              onClick={this.updateRedirect}>Get started!</button>
          </span>
          <div>Already using Slim? <Link to={'/login'}>Sign in.</Link></div>
        </div>
        </div>
      </div>
    );
  }
}
