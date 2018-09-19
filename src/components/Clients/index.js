import React from 'react';

import './../../assets/style/clients.css'

import logo from "../../assets/images/cursor.png";
import apart from './../../assets/images/apart-finder.png'
import cox from './../../assets/images/cox.png'
import cnn from './../../assets/images/cnn.png'
import john from './../../assets/images/john-deer.png'
import banana from './../../assets/images/banana.png'
import fujifilm from './../../assets/images/fujifilm.png'

export default () =>
    <div className="clients">
        <div className="cases__header">
            <div className="cases__title">
                <img src={logo} alt=""/>
                <h2>Our Clients</h2>
            </div>
        </div>
        <div className="clients__body">
            <div className="clients__item">
                <div className="clients__img-wrap">
                    <img src={cox} alt=""/>
                </div>
            </div>
            <div className="clients__item">
                <div className="clients__img-wrap">
                    <img src={cnn} alt=""/>
                </div>
            </div>
            <div className="clients__item">
                <div className="clients__img-wrap">
                    <img src={apart} alt=""/>
                </div>
            </div>
            <div className="clients__item">
                <div className="clients__img-wrap">
                    <img src={john} alt=""/>
                </div>
            </div>
            <div className="clients__item">
                <div className="clients__img-wrap">
                    <img src={banana} alt=""/>
                </div>
            </div>
            <div className="clients__item">
                <div className="clients__img-wrap">
                    <img src={fujifilm} alt=""/>
                </div>
            </div>
        </div>
    </div>