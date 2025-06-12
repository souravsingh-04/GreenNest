 import React from "react";

 function HeroSection() {
            return (
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1>Eco-Friendly & Home Delivered</h1>
                                <p>We care for the planet. All our packaging is eco-friendly, and your plants are delivered fresh and ready to thrive.</p>
                            </div>
                            <div className="hero-form">
                                <div className="form-container">
                                    <h2>Sign up for free</h2>
                                    <div>
                                        <div className="form-group">
                                            <input type="email" id="floatingInput" placeholder=" " required />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" id="floatingPassword" placeholder=" " required />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <button className="btn btn-primary" type="button">Sign up</button>
                                        <small>By clicking Sign up, you agree to the terms of use.</small>
                                        <hr />
                                        <button className="btn btn-social" type="button">Sign up with Google</button>
                                        <button className="btn btn-social" type="button">Sign up with Facebook</button>
                                        <button className="btn btn-social" type="button">Sign up with GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

        export default HeroSection;