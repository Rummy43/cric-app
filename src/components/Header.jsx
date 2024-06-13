import React from 'react';
import './header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
//rfce is the shortcut to create a boiler plate component structure
//you need to install ES7+ React/Redux/React-Native snippets extention inorder these shortcuts to work.
function Header() {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <Logo />
            <SearchBar />
            <Nav />
        </header>
    )
}

export default Header