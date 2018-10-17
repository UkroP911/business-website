import React, {Component} from 'react';

import './../../assets/style/testimonials_clients.css'

import Testimonials from './../../components/Testimonials';
import Clients from './../../components/Clients';
import Banner from './../../components/Banner';

class TestimonialsClients extends Component{

    constructor(props){
        super(props)
        this.state = {
            scrollClass: '',
            bubbledClass: ''
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler, true)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler, true)
    }

    scrollHandler = () => {
        let elem = document.querySelector('.clients__body').getBoundingClientRect();
        let clients = document.querySelectorAll('.clients__item');

        let clientsToArr = Array.from(clients);

        let arrLength = clientsToArr.length;
        let i = 0;

        this.setState({
            displayOffset: elem.top
        });

        if(elem.top < 600){
            this.setState({
                scrollClass: 'scrollClass',
                bubbledClass: 'bubbledClass'
            });
        }
        else {
            this.setState({
                bubbledClass: ''
            });
        }

        if(elem.top < 700 ){
            setTimeout(function test() {
                clientsToArr[i].classList.add('bubbledClass');
                if(++i < arrLength) setTimeout(test, 100)
            },100);
        }



    };

    render(){
        const {scrollClass, bubbledClass, displayOffset} = this.state;
        return(
            <div className="tesCli">
                <div className="container">
                    <div className="tesCli__content">
                        <div className="tesCli__row">
                            <div className="tesCli__column">
                                <Testimonials scrollClass={scrollClass}/>
                            </div>
                            <div className="tesCli__column">
                                {/*<div className="displayOffset">{displayOffset}</div>*/}
                                <Clients bubbledClass={bubbledClass}/>
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
