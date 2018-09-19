import React from 'react';
import { Link } from 'react-router-dom';

import case1 from './../../assets/images/case1.png'
import eye from './../../assets/images/eye.png'
import link from './../../assets/images/link.png'

export default () =>
    <div className="cases__item">
        <div className="img-wrap">
            <img src={case1} alt=""/>
        </div>
        <div className="cases__item-links-wrap">
            <Link to="/" className="cases__item-link"><img src={eye} alt=""/> </Link>
            <Link to="/" className="cases__item-link"><img src={link} alt=""/> </Link>

        </div>
    </div>