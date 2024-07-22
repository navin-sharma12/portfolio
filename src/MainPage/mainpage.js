import React from "react";
import NavBar from "../Components/navbar.js";
import Home from "../Components/home.js";
import About from "../Components/about.js";
import Portfolio from "../Components/portfolio.js";
import Contact from "../Components/contact.js";
import StyleSwitcher from "../Components/styleSwitcher.js";
import "../Styles/style.css";

export default function MainPage() {
    return (
        <div className="main-container">
            <NavBar />
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <StyleSwitcher />
        </div>
    );
}
