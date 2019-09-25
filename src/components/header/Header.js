import React from 'react';

const Header = () => (
    <header className="header">
        <div><img src="images/logo.png" width="24px" alt="logo"/>
        <span>  Vote machine</span></div>
        <div className="header__sign-in">
            <span>Log In</span>
            <span>Sign In</span>
        </div>
    </header>
);

export default Header;