import React, { useState } from "react";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');

    const handleScrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setActiveLink(id);
    };

    return (
        <div className="aside">
            <div className="logo">
                <a href="/">
                    <span>N</span>avin
                </a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li>
                    <a 
                        onClick={() => handleScrollTo('home')} 
                        className={activeLink === 'home' ? 'active' : ''}
                    >
                        <i className="fa fa-home"></i>Home
                    </a>
                </li>
                <li>
                    <a 
                        onClick={() => handleScrollTo('about')} 
                        className={activeLink === 'about' ? 'active' : ''}
                    >
                        <i className="fa fa-user"></i>About
                    </a>
                </li>
                <li>
                    <a 
                        onClick={() => handleScrollTo('portfolio')} 
                        className={activeLink === 'portfolio' ? 'active' : ''}
                    >
                        <i className="fa fa-briefcase"></i>Portfolio
                    </a>
                </li>
                <li>
                    <a 
                        onClick={() => handleScrollTo('contact')} 
                        className={activeLink === 'contact' ? 'active' : ''}
                    >
                        <i className="fa fa-comments"></i>Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}
