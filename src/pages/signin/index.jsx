import React, { useState } from 'react';
import logoProfile from '../../designs/img/profile.PNG';
import './index.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { connectUser } from '../../store';

function Connect() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = () => {
        dispatch(connectUser({ username, password })).then((result) => {
            if (result.payload) {
                navigate('/user');
            } else {
                alert('Identifiants incorrects. Veuillez réessayer.');
            }
        });
    };

    return (
        <main id="main-signin">
            <section className="sign-in-content">
                <img src={logoProfile} className="App-logo-signin" alt="logo" />
                <h2 className="sign-in-content-h2">Sign In</h2>
                <form
                    className="form-signin"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSignIn();
                    }}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Connect;
