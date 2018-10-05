import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './../../assets/style/main_page.css';

import Slider from './../Slider';
import MainPageArticles from './../MainPageArticles';
import Cases from './../Cases';
import TestimonialsClients from './../TestimonialsClients';

class MainPage extends Component{
    renderCases = () => {
      document.scrollTop
    };

    render(){
        return(
            <div className="main-page">
                <Slider/>
                <MainPageArticles/>
                <CSSTransition
                    key={Math.random()}
                    timeout={{ enter: 1000, exit: 1000 }}
                    classNames='cases-anim'
                >
                    <Cases/>

                </CSSTransition>
                <TestimonialsClients/>
            </div>
        )
    }
}

export default MainPage;
