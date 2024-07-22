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
                            <p>A highly skilled developer with extensive experience in software development, 
                                I am dedicated to delivering innovative solutions that streamline processes, 
                                enhance productivity, and drive business success. With a strong foundation in programming languages such as Java, 
                                JavaScript, ReactJS, NodeJS, Cloud and SQL, I have developed a deep understanding of software engineering 
                                principles and a proven ability to create robust, scalable applications. Whether working independently or as 
                                part of a team, I am committed to leveraging my skills and experience to develop cutting-edge solutions 
                                that exceed expectations and deliver measurable results.</p>
                            <a href="#contact" className="btn hire-me">Hire Me</a>
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