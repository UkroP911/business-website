import React from 'react';

import './../../assets/style/testimonials.css'
import logo from "../../assets/images/cursor.png";



export default () =>
    <div className="testimonials">
        <div className="cases__header">
            <div className="cases__title">
                <img src={logo} alt=""/>
                <h2>Testimonials</h2>
            </div>
        </div>
        <div className="testimonials__body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed
                vitae massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Etiam nec nisi in nisl euismod fringilla.


            </p>
            <cite>John Travis, CEO, DomainName.com</cite>
        </div>
    </div>