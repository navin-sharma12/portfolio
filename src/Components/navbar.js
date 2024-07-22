import React, { useState, useEffect } from "react";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');

    // Update activeLink based on scroll position
    const handleScroll = () => {
        const sections = ['home', 'about', 'portfolio', 'contact'];
        let currentSection = 'home';

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                }
            }
        });

        setActiveLink(currentSection);
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Set the initial active link when the component mounts
    useEffect(() => {
        setActiveLink('home');
    }, []);

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
                        <i className="fa fa-laptop-code"></i>Portfolio
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
