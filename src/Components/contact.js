import React, { useRef } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICEID);
        console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATEID);
        console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLICKEY);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICEID,
            process.env.REACT_APP_EMAILJS_TEMPLATEID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLICKEY
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });

        e.target.reset();
    };

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
                        <a href="https://www.linkedin.com/in/navin-sharma" className="contact-info-item padd-15">
                            <div>
                                <div className="icon"><i className="fab fa-linkedin"></i></div>
                                <h4>Linkedin</h4>
                                <p>www.linkedin.com/in/navin-sharma</p>
                            </div>
                        </a>
                    </div>
                    <h3 className="contact-title padd-15">Send me a email</h3>
                    <div className="row">
                        <div className="contact-form padd-15">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="text" name="from_name" className="form-control" placeholder="Name" required></input>
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="email" name="reply_to" className="form-control" placeholder="Email" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <input type="text" name="subject" className="form-control" placeholder="Subject" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" placeholder="Message" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <button type="submit" className="btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}