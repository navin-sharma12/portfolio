import React from "react";
import navin from "../Images/Navin.jpg";

export default function Portfolio() {
    return(
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
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <img src={navin} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}