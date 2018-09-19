import React, {Component} from 'react';
import Slider from "react-slick";
import './../../assets/style/slider.css';


import slide from './../../assets/images/slide.jpg';
import slide2 from './../../assets/images/slide2.jpg';
import slide3 from './../../assets/images/slide3.png';
import slide4 from './../../assets/images/slide4.jpg';


class Carousel extends Component{
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <section className="slider-section">
                <div className="container">
                    <div className="slider-wrap">
                        <Slider {...settings}>
                            <div>
                                <img src={slide} alt=""/>
                            </div>
                            <div>
                                <img src={slide2} alt=""/>
                            </div>
                            <div>
                                <img src={slide3} alt=""/>
                            </div>
                            <div>
                                <img src={slide4} alt=""/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        );
    }
}

export default Carousel;