import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


import * as routes from "./constants/routes";
import MainPage from "./containers/MainPage";
import PortfolioPage from "./containers/PortfolioPage";
import ContactUsPage from "./containers/ContactUsPage";

import './assets/style/common.css';
import Header from "./containers/Header";
import Footer from "./containers/Footer";


class AnimatedPages extends Component{

    constructor(props){
        super(props);
        this.state = {
            direction: true,
            activeLink: false,
        }
    }

    componentDidMount(){

    }

    childFactoryCreator = (classNames) => (
        (child) => (
            React.cloneElement(child, {classNames})
        )
    );

    onNavLinkClick = (route) => {
        let routesArr = [];
        let currentPath = this.props.location.pathname;
        let nextPath = route;
        let prevPath;
        let nextPathID;
        let prevPathID;

        for (let i in routes){
            routesArr.push(routes[i])
        }

        routesArr.map((item, id) => {
            if(item === currentPath) {
                prevPath = item
            }
            if(nextPath === item){
                nextPathID = id;
            }
            if(prevPath === item){
                prevPathID = id;
            }
        });

        if(nextPathID < prevPathID){
            this.setState({
                direction: true
            })
        } else {
            this.setState({
                direction: false
            })
        }

    };


    render(){
        const {direction} = this.state;
        return(
            <div className="App">

                <Header onNavLinkClick={this.onNavLinkClick} />
                <main className="main">
                <TransitionGroup className="transition-group" childFactory={this.childFactoryCreator(direction ? "pageSwitch1" : "pageSwitch2")}>

                    <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 1000, exit: 1000 }}
                        classNames={direction ? "pageSwitch1" : "pageSwitch2"}
                    >

                        <div className="main-content">
                            <Switch location={this.props.location}>
                                <Route path={routes.MAIN_PAGE} exact component={MainPage}/>
                                <Route path={routes.PORTFOLIO} component={PortfolioPage}/>
                                <Route path={routes.CONTACT_US}  component={ContactUsPage}/>
                            </Switch>
                            <Footer/>
                        </div>


                    </CSSTransition>

                </TransitionGroup>
                </main>
            </div>
        )
    }
}

export default withRouter(AnimatedPages)