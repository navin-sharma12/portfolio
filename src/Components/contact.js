import React from "react";

export default function Contact() {
    return (
        <div className="main-content">
            <div className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Do you have any Questions ?</h3>
                    <h4 className="contact-sub-title padd-15">I'm at your Service</h4>
                    <div className="row">
                        <div className="contact-info-item padd-15">
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <h4>Call Me On</h4>
                            <p>+1(617)961-9878</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon"><i className="fa fa-envelope"></i></div>
                            <h4>Email</h4>
                            <p>navinsharmar@gmail.com</p>
                        </div>
                        <a href="https://www.github.com/navin-sharma12" className="contact-info-item padd-15">
                            <div>
                                <div className="icon"><i className="fab fa-github"></i></div>
                                <h4>GitHub</h4>
                                <p>www.github.com/navin-sharma12</p>
                            </div>
                        </a>
                        <a href="https://www.github.com/navin-sharma12" className="contact-info-item padd-15">
                            <div>
                                <div className="icon"><i className="fab fa-linkedin"></i></div>
                                <h4>Linkedin</h4>
                                <p>www.linkedin.com/in/navin-sharma</p>
                            </div>
                        </a>
                    </div>
                    <h3 className="contact-title padd-15">Send me a email</h3>
                    <h4 className="contact-sub-title padd-15">I'm very responsive to messages</h4>
                    <div className="row">
                        <div className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"></input>
                                    </div>
                                </div>
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div><div className="row">
                                <div className="form-item col-12 padd-15">
                                    <button type="submit" className="btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}