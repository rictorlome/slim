import React from 'react';
import { SplashNav } from './splashnav';
import { Link } from 'react-router-dom';

export const Splash = (props) => {
  return (
    <div>
      < SplashNav />

      <div className="splashbody">

        <div className="splashimagecontainer">
          <div className="splashimage">
            <img src="https://orig00.deviantart.net/7f3a/f/2017/015/b/c/pixel_art_landscape_wallpaper_firewatch_by_andlai9087-davi5xl.png"></img>
          </div>
        </div>
        <div className="splashform">
          <h3> Send messages to your friends! </h3>

          <span>Already a member? <Link to={'/login'}>Click here!</Link></span>
        </div>

      </div>



    </div>
  );
};
