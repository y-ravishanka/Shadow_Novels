import React from 'react';
import '../styles/navBar.scss';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navi = useNavigate();

    const navigateToHome = () => {
        navi('/');
    };

    return (
        <div className='navBar'>
            <div className="logo">
                <svg className='menuSvg' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z"></path>
                </svg>
                <svg className='logoSvg' onClick={navigateToHome} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.48 3.469C7.786 2.66 5.42 2.264 2.25 2.25a1.47 1.47 0 0 0-1.325.79 1.5 1.5 0 0 0-.175.705v13.411c0 .907.645 1.59 1.5 1.59 3.331 0 6.673.312 8.675 2.204a.193.193 0 0 0 .325-.14V5.006a.744.744 0 0 0-.256-.562 6.704 6.704 0 0 0-1.514-.976Z"></path>
                    <path d="M22.59 2.499a1.469 1.469 0 0 0-.84-.249c-3.17.014-5.536.408-7.23 1.219a6.716 6.716 0 0 0-1.514.974.747.747 0 0 0-.256.562v15.803a.185.185 0 0 0 .113.17.185.185 0 0 0 .2-.038c1.203-1.195 3.315-2.195 8.689-2.194a1.5 1.5 0 0 0 1.5-1.5v-13.5a1.5 1.5 0 0 0-.662-1.247Z"></path>
                </svg>
                <Link className='logoName' to={'/'}>Shadow Novels</Link>
            </div>
            <div className="linkContainer">
                <Link className='navItem' to={'/'}>Home</Link>
                <Link className='navItem' to={'/chapter'}>Chapter</Link>
                <Link className='navItem' to={'/book'}>Book</Link>
            </div>
        </div>
    );
};

export default NavBar;