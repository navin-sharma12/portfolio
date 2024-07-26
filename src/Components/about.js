import React from "react";

export default function About() {
    return (
        <div className="main-content">
            <section className="about section">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h3>I am Navin Sharma a <span>Full Stack Software Engineer</span></h3>
                                    <p>A highly skilled developer with extensive software development experience,
                                        I deliver innovative solutions that enhance productivity and drive business success.
                                        Proficient in Java, JavaScript, Python, MERN Stack, Cloud,
                                        and SQL, I excel in creating robust, scalable applications. Committed to
                                        leveraging my skills and experience, I develop cutting-edge solutions that
                                        exceed expectations and achieve measurable results.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="education padd-15">
                                    <h3 className="title">Education</h3>
                                    <div className="row">
                                        <div className="timeline-box padd-15">
                                            <div className="timeline shadow-dark">
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> Sept 2022 - May 2024
                                                    </h3>
                                                    <h4 className="timeline-title">Master of Science in Information Systems</h4>
                                                    <p>Northeastern University</p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> Aug 2015 - May 2019
                                                    </h3>
                                                    <h4 className="timeline-title">Bachelor of Engineering in Computer Engineering</h4>
                                                    <p>University of Mumbai</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience padd-15">
                                    <h3 className="title">Experience</h3>
                                    <div className="row">
                                        <div className="timeline-box padd-15">
                                            <div className="timeline shadow-dark">
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> Jun 2023 - Aug 2023
                                                    </h3>
                                                    <h4 className="timeline-title">Engineering Intern at UnitedHealth Group</h4>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> Mar 2021 - Jul 2022
                                                    </h3>
                                                    <h4 className="timeline-title">Engineer at QualityKiosk Technologies</h4>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> Jun 2019 - Feb 2021
                                                    </h3>
                                                    <h4 className="timeline-title">Developer at Second Machine Age</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}