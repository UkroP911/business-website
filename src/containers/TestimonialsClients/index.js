import React, {Component} from 'react';

import './../../assets/style/testimonials_clients.css'

import Testimonials from './../../components/Testimonials';
import Clients from './../../components/Clients';
import Banner from './../../components/Banner';

class TestimonialsClients extends Component{
    render(){
        return(
            <div className="tesCli">
                <div className="container">
                    <div className="tesCli__content">
                        <div className="tesCli__row">
                            <div className="tesCli__column">
                                <Testimonials/>
                            </div>
                            <div className="tesCli__column">
                                <Clients/>
                            </div>
                        </div>
                        <Banner/>
                    </div>

                </div>
            </div>
        )
    }
}

export default TestimonialsClients;