import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer =()=>{
    return(
        <footer>
            <div className="footer">
                <div className="footer__section">
                    <h3>About Us</h3>
                    <p>E-Commerce Dashboard</p>
                </div>
                <div className="footer__section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="tel:+1234567890">123-456-7890</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                        <li>123 Main St.</li>
                        <li>City, ST 12345</li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Amol Infotech Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;