import React from "react";
import cloud from "../Images/Cloud.png";
import ecommerce from "../Images/ecommerce.png"
import education from "../Images/education.png";
import portfolio from "../Images/Portfolio.png"
import skillspark from "../Images/Skillspark.png";
import weatherapp from "../Images/WeatherApp.png"
export default function Portfolio() {
    return (
        <div className="main-content">
            <section className="portfolio section">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-heading padd-15">
                            <h2>My Projects :</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="https://www.github.com/navin-sharma12">
                                        <img src={cloud} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="https://www.github.com/navin-sharma12">
                                        <img src={ecommerce} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="https://www.github.com/navin-sharma12">
                                        <img src={education} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="https://www.github.com/navin-sharma12">
                                        <img src={portfolio} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="https://www.github.com/navin-sharma12">
                                        <img src={skillspark} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="https://www.github.com/navin-sharma12">
                                        <img src={weatherapp} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}