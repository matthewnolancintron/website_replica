import React, { useState } from 'react';
import './NotSignedInPage.css';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import MouseImage from '../../assets/mouse.svg'; // Relative path to the SVG file
import MouseIcon from '../../assets/mouse-icon.svg'; 

const NotSignedInPage = () => {
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleGetStarted = () => {
    setIsRegisterClicked(true);
  };

  const handleLogin = () => {
    setIsLoginClicked(true);
  };

  // Conditionally render the RegisterPage or LoginPage based on the state values
  if (isRegisterClicked) {
    return <RegisterPage />;
  }

  if (isLoginClicked) {
    return <LoginPage />;
  }

  return (
    <div className="notSignedInPage">
      <header>
        {/* add icon or symbal next to website title */}
        <img src={MouseIcon} alt="Mouse icon" className="mouse-icon" />
        <h1>fake duolingo</h1>
      </header>

      <section className="middle">
        <img src={MouseImage} alt="Mouse mascot art" className="mouse-mascot-art" />

        <div className="subtext">
          <p>hello</p>
        </div>
      </section>

      <section className='bottom'>
        {/* adjust styles of buttons */}
        <div className="buttons">
          <button className="get-started-btn" onClick={handleGetStarted}>
            GET STARTED
          </button>
          <button className="login-btn" onClick={handleLogin}>
            I ALREADY HAVE AN ACCOUNT
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotSignedInPage;

/**
 * For styles:
 * There are multiple arrangements of the interface depending on screen size
 * use media qeuries for that.
 * 
 * the desktop and tablet versions have some extra functionality that the smaller views do not have
 * and that is a horizontal scrolling navigation for the language picker
 * 
 * for simplicity I could start with a mobile first appoarch and then later on
 * contionally render based on media query that langauge picker navigation
 */

/**
 * For content:
 *  Header:
 *  logo + website title
 * 
 *  middle section:
 *  animation/giff or just image
 *           +
 *   sub text
 * 
 *  bottom section:
 *  buttons
 * 
 *  under buttons
 *  optional language selector
 * 
 * I'm going to omit the rest of the content 
 * for the sake of project scope
 */


/**
 * notes for when I return:
 * I'm thinking the mouse.svg would be a good center image
 * and the mouse-icon could be the logo next to the web title
 * just need to use flex box to style the header and adjust
 * buttons and page layout to look similar to duolingo's
 */
