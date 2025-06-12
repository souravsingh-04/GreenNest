//Header component
import React from "react";

function Header() {
            return (
                <header>
                    <div className="container">
                        <div className="header-content">
                            <div className="logo">
                                <h1>
                                    <a href="/">
                                        <img src="/images/logo.png" alt="GreenNest" />
                                        <span>GreenNest</span>
                                    </a>
                                </h1>
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#indoor-plants">Plants</a></li>
                                    <li><a href="#gardening-tools">Gardening Tools</a></li>
                                    <li><a href="#">MyBasket</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                            <div className="header-buttons">
                                <button className="btn btn-outline">Login</button>
                                <button className="btn btn-primary">Sign-up</button>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
        
        export default Header;