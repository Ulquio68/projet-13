import React from 'react';
import logo from '../../designs/img/argentBankLogo.png';
import logoProfile from '../../designs/img/profile.PNG';
import logoDisconnect from '../../designs/img/sign-out.PNG';
import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const location = useLocation();
    const isIndexPage = location.pathname === '/index';
    const isSigninPage = location.pathname === '/sign-in';
    const isUserPage = location.pathname === '/user';
    const profileStore = useSelector((state) => state.connectUser);

    return (
        <header id="header">
            <Link to="/index">
                <img src={logo} className="App-logo-header" alt="logo" />
            </Link>
            <div className="rightNav">
                {isUserPage ? (
                    <>
                        <Link to="/user" className="link-right">
                            <img
                                src={logoProfile}
                                className="App-logo-profile"
                                alt="logo-profile"
                            />
                            <p>{profileStore.firstName}</p>
                        </Link>
                        <Link to="/sign-in" className="link-right">
                            <img
                                src={logoDisconnect}
                                className="App-logo-profile"
                                alt="logo-profile"
                            />
                            <p>Sign Out</p>
                        </Link>
                    </>
                ) : isIndexPage || isSigninPage ? (
                    <Link to="/sign-in" className="link-right-bis">
                        <img
                            src={logoProfile}
                            className="App-logo-profile"
                            alt="logo-profile"
                        />
                        <p>Sign In</p>
                    </Link>
                ) : null}
            </div>
        </header>
    );
}

export default Header;
