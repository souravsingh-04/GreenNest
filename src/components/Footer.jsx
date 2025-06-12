import React from "react";

  function Footer() {
            return (
                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <a href="/">
                                    <img src="/images/logo.png" alt="GreenNest" style={{ maxHeight: '40px', marginBottom: '1rem' }} />
                                </a>
                                <p>GreenNest delivers eco-friendly plants with sustainable packaging to bring nature to your home.</p>
                            </div>
                            <div className="footer-section">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Shop Plants</a></li>
                                    <li><a href="#">Gardening Tools</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h5>Connect With Us</h5>
                                <p>
                                    Email: <a href="mailto:support@greennest.com">support@greennest.com</a><br />
                                    Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </p>
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.instagram.com/yourprofile" aria-label="Instagram">
                                            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.telegram.com/yourprofile" aria-label="Facebook">
                                            <img src="/images/telegram.png" alt="Telegram" className="social-icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-section text-center-sm">
                                <h5>Stay Updated</h5>
                                <div className="footer-form">
                                    <div className="input-group">
                                        <input type="email" placeholder="Enter your email" aria-label="Email" required />
                                        <button type="button">Subscribe</button>
                                    </div>
                                    <small>Get the latest plant care tips and offers.</small>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="footer-bottom">
                            <p>© 2025 GreenNest, Inc. All rights reserved.</p>
                            <ul style={{ color: '#D1D5DB' }}>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            );
        }
        export default Footer;