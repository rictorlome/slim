import React from 'react';

export const SplashNav = (props) => {
  return (
      <nav className="splashNav">

        <div className="leftSplashNav">
          <div className='splashIconOuterdiv'>
            <div className='splashIconInnerDiv' onClick={() => props.history.push('/')}></div>
          </div>
          <div className="title"> Slim </div>
        </div>

        <div className="midSplashNav">
          {props.welcome}
        </div>

        <div className="rightSplashNav">
            In the right Splash Nav
            {props.loggedIn && (<button id="logout" onClick={()=>props.logout()}>Logout</button>)}
        </div>



      </nav>

  );
};
