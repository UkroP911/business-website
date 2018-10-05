import React, {Component} from 'react';

import CasesPreview from './../../components/CasesPreview';
import logo from './../../assets/images/cursor.png'
import leftArrow from './../../assets/images/left-arrow.svg'
import rightArrow from './../../assets/images/right-arrow.svg'


import './../../assets/style/cases.css'

class Cases extends Component{
    renderCasePreview = () => {
        let arr = [];
        for (let i = 0; i < 4; i++ ){
            arr.push(<CasesPreview key={i} />)
        }
        return arr;
    };
    render(){
        return(
            <section className="cases">
                <div className="container">
                    <div className="cases__content">
                        <div className="cases__header">
                            <div className="cases__title">
                                <img src={logo} alt=""/>
                                <h2>latest works</h2>
                            </div>
                            <div className="cases__button-group">
                                <button className="btn btn-prev">
                                    <img src={leftArrow} alt=""/>
                                </button>
                                <button className="btn btn-next">
                                    <img src={rightArrow} alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="cases__body">
                            { this.renderCasePreview() }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cases;
