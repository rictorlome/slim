import React from 'react';

export const SplashNav = (props) => {
  return (
      <nav className="splashNav">

        <div className="leftSplashNav">
          <div className='splashIconOuterdiv'>
            <div className='splashIconInnerDiv' onClick={() => props.history.push('/')}>
              <img src={window.slacklogo} height="50px" width="50px" />
            </div>
          </div>
          <div className="title"> Slim </div>
        </div>

        <div className="midSplashNav">
          {props.welcome}
        </div>

        <div className="rightSplashNav">
          <div className="rightSplashNavInnerDiv">
            <a href="https://github.com/rictorlome"><img src={window.github} height="30px" width="30px" /></a>
            <a href="https://www.linkedin.com/in/sam-golland-01a112153"><img src={window.linkedin} height="30px" width="30px"></img></a>
            <button className="guestLoginButton" onClick={()=>props.createGuest()}>Guest Login</button>
            {props.loggedIn && (<button id="logout" onClick={()=>props.logout()}>Logout</button>)}
          </div>
        </div>



      </nav>

  );
};
