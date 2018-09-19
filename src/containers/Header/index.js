import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import '../../assets/style/header.css'
import logo from './../../assets/images/bislite.png'


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            showDropdown: false,
            activedrop: 0
        };
        this.handleDropdown = this.handleDropdown.bind(this)
    }

    handleDropdown = (dropNumber,e) => {
        this.setState({
            activedrop: dropNumber
        });
        document.addEventListener("click", this.hideDropdown);
        e.preventDefault()
    };

    hideDropdown = () => {
        this.setState({ activedrop: 0 });
        document.removeEventListener("click", this.hideDropdown);
    };

    render(){
        const {activedrop} = this.state;
        return(
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <div className="logo">
                            <img src={logo} alt="Bis Lite Company"/>
                        </div>
                        <nav className="header__nav">
                            <div className="header__nav-link"><NavLink to="/">Home</NavLink></div>
                            <div className="header__nav-link"><NavLink to="/">About Us</NavLink></div>
                            <div className={`header__nav-link `} >
                                <NavLink to="/" onClick={(e) => this.handleDropdown(1,e)}>Services</NavLink>
                                    {activedrop === 1 ?

                                        <div className="header__dropdown">
                                            <ul className="header__dropdown-list">
                                                <li><NavLink to="/">Web Design</NavLink></li>
                                                <li><NavLink to="/">Wordpress Design</NavLink></li>
                                                <li><NavLink to="/">Mobile App Devplopment</NavLink></li>
                                                <li><NavLink to="/">Internet Marketing</NavLink></li>
                                                <li><NavLink to="/">Social Media Management</NavLink></li>
                                            </ul>
                                        </div>
                                        : null
                                    }
                            </div>
                            <div className={`header__nav-link `} >
                                <NavLink to="/" onClick={(e) => this.handleDropdown(2,e)}>Portfolio</NavLink>
                                    {activedrop === 2 ?
                                        <div className="header__dropdown">
                                            <ul className="header__dropdown-list">
                                                <li><NavLink to="/">Portfolio</NavLink></li>
                                                <li><NavLink to="/">Landings</NavLink></li>
                                                <li><NavLink to="/">Shops</NavLink></li>
                                            </ul>
                                        </div>
                                        : null
                                    }
                            </div>
                            <div className="header__nav-link"><NavLink to="/">Blog</NavLink></div>
                            <div className="header__nav-link"><NavLink to="/">Contact Us</NavLink></div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header