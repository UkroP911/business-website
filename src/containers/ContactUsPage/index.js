import React, {Component} from 'react';

import './../../assets/style/contact__page.css';

import ContactForm from './../../components/ContactForm';
import Map from './../../components/Map';
import logo from "../../assets/images/cursor.png";

class ContactUsPage extends Component{

    componentDidMount(){
        this.addTransformClass();
    }

    addTransformClass = () => {
        let elems = document.querySelectorAll('.animated-input');
        let elemsToArr = Array.from(elems);
        let arrLength = elemsToArr.length;
        let i = 0;

        setTimeout(function test() {
            elemsToArr[i].classList.add('transition-height');
            if(++i < arrLength) setTimeout(test, 200)
        },200);
    };
    render(){
        return(
            <div className="contact-page">
                <div className="container">
                    <div className="cases__title">
                        <img src={logo} alt=""/>
                        <h2>latest works</h2>
                    </div>
                    <div className="contact-page__content">
                        <div className="contact-page__col">
                            <div className="contact-page__sub-title">
                                <p>
                                    Thank you for stopping by. Please use the form below to contact us and will get back to you at the earliest possible
                                </p>
                                <p>
                                    For feedback or questions, please email us at: <a href="mailto:email@bislite.com">email@bislite.com</a>
                                </p>
                            </div>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUsPage;
