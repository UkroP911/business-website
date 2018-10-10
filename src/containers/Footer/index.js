import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './../../assets/style/footer.css'
import logo from "../../assets/images/bislite.png";

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__content-row">
                            <div className="footer__content-col">
                                <div className="footer__col-title">
                                    About Us
                                </div>
                                <p className="footer__about-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui
                                    et tincidunt. Sed sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer
                                    at leo eros. Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit
                                    dictum molestie.
                                </p>
                            </div>
                            <div className="footer__content-col">
                                <div className="footer__col-title">Explore</div>
                                <ul className="footer__content-list">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Portfolio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Blog</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__content-col">
                                <div className="footer__col-title">Browse</div>
                                <ul className="footer__content-list">
                                    <li>
                                        <NavLink to="/">Careers</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Press & Media</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Contact Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Terms of Service</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Privacy Policy</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__content-col">
                                <div className="footer__col-title">Contact Us</div>
                                <address className="footer__content-address">
                                    <div><strong>BisLite Inc.</strong></div>
                                    <div>Always street 265</div>
                                    <div>0X - 125 - Canada</div>
                                    <br/>
                                    <div>Phone: <a href="tel:9876543210">987-6543-210</a></div>
                                    <div>Fax: <a href="tel:9876543210">987-6543-210</a></div>
                                </address>
                            </div>
                            <div className="footer__content-col">
                                <div className="footer__col-title">Connect with us</div>
                                <div className="footer__social-row">
                                    <div className="sprite-icon bg-facebook" />
                                    <div className="sprite-icon bg-dribbble" />
                                    <div className="sprite-icon bg-pinterest" />
                                </div>
                                <div className="footer__social-row">
                                    <div className="sprite-icon bg-linkedin" />
                                    <div className="sprite-icon bg-skype" />
                                    <div className="sprite-icon bg-share" />
                                </div>
                            </div>
                        </div>
                        <div className="footer__content-row">
                            <p className="copyright">
                                © Copyright 2012 - BisLite Inc. All rights reserved. Some free icons used here are created by Brankic1979.com.
                                Client Logos are copyright and trademark of the respective owners / companies.
                                <br/>
                                Source design template: <a className="copyright" href="http://www.graphicsfuel.com">http://www.graphicsfuel.com</a>
                            </p>
                            <div className="logo">
                                <img src={logo} alt="Bis Lite Company"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
