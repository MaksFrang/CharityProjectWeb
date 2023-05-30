import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logoPng from '../../assets/logoPng.png';
import logo_mp4 from '../../assets/logo.mp4';

import './navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const logOut = () => {
    return localStorage.clear();
  };
  const isSignedIn = localStorage.getItem('isLogged');

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header-content-logo">
          <img src={logoPng} className="logoPng" alt="logo" />
          <video src={logo_mp4} width={150} muted autoPlay={true} loop></video>
        </Link>
        <nav
          className={`${'header__content__nav'} 
          ${menuOpen && size.width < 768 ? `${'isMenu'}` : ''} 
          }`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isSignedIn && (
              <li>
                <Link to="/userprofile">Profile</Link>
              </li>
            )}
            {isSignedIn && (
              <li>
                <Link to="/addpost">Add post</Link>
              </li>
            )}
            {!isSignedIn && (
              <Link to="/signin">
                <button className="btn btn__login">Login</button>
              </Link>
            )}
            {!isSignedIn && (
              <Link to="/signup">
                <button className="btn">Sign Up</button>
              </Link>
            )}
            {isSignedIn && (
              <Link to="/signin">
                <button onClick={logOut} className="btn">
                  Log out
                </button>
              </Link>
            )}
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
