import React from 'react';
import { Link } from 'react-router-dom';

import './../../assets/style/article.css';
import arrow from './../../assets/images/right-arrow.svg'


export default () =>

        <div className="article-preview">
            <div className="article-preview__header">
                <div className="article-preview__logo">
                    {/*<img src="" alt=""/>*/}
                    <span className="art-icon bg-pencil"></span>
                </div>
                <h3 className="article-preview__title">Clean Theme</h3>
            </div>
            <div className="article-preview__body">
                <p>
                    Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida
                    augue sed viverra. Quisque at nulla leo, non aliquet mi.
                </p>
            </div>
            <div className="article-preview__footer">
                <Link to="/" className="article-preview__link"><img src={arrow} alt=""/>Read more</Link>
            </div>
        </div>