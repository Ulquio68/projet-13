import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Error from './components/error';
import Home from './pages/index';
import Connect from './pages/signin';
import User from './pages/user';
import { store } from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/index" element={<Home />} />
                    <Route path="/sign-in" element={<Connect />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
