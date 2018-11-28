import React, {Component} from 'react';

import './../../assets/style/main_page.css';

import Slider from './../Slider';
import MainPageArticles from './../MainPageArticles';
import Cases from './../Cases';
import TestimonialsClients from './../TestimonialsClients';

class MainPage extends Component{

    render(){
        return(
            <div className="main-page">
                <Slider/>
                <MainPageArticles/>
                <Cases/>
                <TestimonialsClients/>
            </div>
        )
    }
}

export default MainPage;
