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
            <img src="https://orig00.deviantart.net/7f3a/f/2017/015/b/c/pixel_art_landscape_wallpaper_firewatch_by_andlai9087-davi5xl.png"></img>
          </div>
        </div>

        <div className="splashform">
          <h3> Send messages to your friends! </h3>
          <span>
            <input placeholder="Username" value={this.state.username} onChange={this.updateUsername} />
            <button onClick={this.updateRedirect}>Get started!</button>
          </span>
          <div>Already using Slim? <Link to={'/login'}>Click here!</Link></div>
          <div>Or! Log in as <a onClick={()=>this.props.createGuest()}>a guest</a></div>
        </div>
        </div>
      </div>
    );
  }
}
