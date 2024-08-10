import React from "react";
import navin from "../Images/Navin.jpg";

export default function Home() {
    return (
        <div className="main-content">
            <section className="home section">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello"> Hello, my name is <span className="name">Navin Sharma</span></h3>
                            <h3 className="my-profession">I'm a <span className="typing">Full Stack Software Engineer</span></h3>
                            <div className="personal-info">
                                <div className="buttons">
                                    <a href="/Resume/Navin Ravikant Sharma.pdf" download="Navin_Sharma_Resume.pdf" className="btn">Download Resume</a>
                                    <a href="#contact" className="btn hire-me">Hire Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-img padd-15">
                            <img src={navin} alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}