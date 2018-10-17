import React, {Component} from 'react';

import CasesPreview from './../../components/CasesPreview';
import logo from './../../assets/images/cursor.png'
import leftArrow from './../../assets/images/left-arrow.svg'
import rightArrow from './../../assets/images/right-arrow.svg'


import './../../assets/style/cases.css'

class Cases extends Component{

    constructor(props){
        super(props)
        this.state = {
            scrollClass: '',
            displayCase: false,
            displayOffset: 0
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler, true)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler, true)
    }


    scrollHandler = () => {
        let elem = document.querySelector('.cases__body').getBoundingClientRect();

        if(elem.top < 800){
            this.setState({
                scrollClass: 'slideRigth',
                displayCase: true,
            });
        }
    };


    renderCasePreview = () => {
        let arr = [];
        let {scrollClass, displayCase} = this.state;
        for (let i = 0; i < 4; i++ ){
            arr.push(<CasesPreview scrollClass={scrollClass} displayCase={displayCase} key={i} />)
        }
        return arr;
    };

    render(){
        const {displayOffset} = this.state;
        return(
            <section className="cases">
                <div className="container">
                    <div className="cases__content">
                        <div className="cases__header">
                            <div className="cases__title">
                                <img src={logo} alt=""/>
                                <h2>latest works</h2>
                            </div>
                        </div>
                        <div className="cases__body">


                            {this.renderCasePreview()}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cases;
