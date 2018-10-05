import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';
import  * as routes from './../../constants/routes';

import '../../assets/style/header.css'
import logo from './../../assets/images/bislite.png'


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            direction: true,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.hideNav = this.hideNav.bind(this)
    }

    toggleNav(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
        document.addEventListener("click", this.hideNav);
    }

    hideNav(){
        this.setState({
            isOpen: false,
        });
        document.removeEventListener("click", this.hideNav);
    }

    childFactoryCreator = (classNames) => (
        (child) => (
            React.cloneElement(child, {classNames})
        )
    );

    render(){
        const {isOpen} = this.state;
        return(
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <div className="logo">
                            <img src={logo} alt="Bis Lite Company"/>
                        </div>
                        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
                            <div className="header__nav-link">
                                <NavLink
                                    to={routes.MAIN_PAGE}
                                    onClick={(event) => this.props.onNavLinkClick(routes.MAIN_PAGE,event)}
                                    exact={true}
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className={`header__nav-link `} >
                                <NavLink
                                    to={routes.PORTFOLIO}
                                    onClick={() => this.props.onNavLinkClick(routes.PORTFOLIO)}
                                    activeClassName="active"
                                >
                                    Portfolio
                                </NavLink>
                            </div>
                            <div className="header__nav-link">
                                <NavLink to="/test">Blog</NavLink>
                            </div>
                            <div className="header__nav-link">
                                <NavLink
                                    to={routes.CONTACT_US}
                                    onClick={() => this.props.onNavLinkClick(routes.CONTACT_US)}
                                    activeClassName="active"
                                >
                                    Contact Us
                                </NavLink>
                            </div>
                        </nav>

                        <button className="toggle-nav"
                            onClick={() => this.toggleNav()}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;