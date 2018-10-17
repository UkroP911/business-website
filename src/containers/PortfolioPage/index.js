import React, {Component} from 'react';

import './../../assets/style/portfolio_page.css';

import CasesPreview from './../../components/CasesPreview';
import Pagination from './../../components/Pagination';
import logo from "../../assets/images/cursor.png";

class PortfolioPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            showCases: true
        };
        this.toggleFilter = this.toggleFilter.bind(this);
        this.hideFilers = this.hideFilers.bind(this);
    }

    componentDidMount(){
        this.addBubbleClass();
    }

    renderPreview(){
        let arr = [];
        let {showCases} = this.state;
        for (let i = 0; i < 16; i++ ){
            arr.push(<CasesPreview showCases={showCases} key={i} />)
        }
        return arr;
    }

    renderFilters(){
        let btn = [];
        const btnText = [
            'All',
            'Websites',
            'Wordpress',
            'Mobile Apps',
            'Icons',
            'Logos',
            'Graphics',
        ];

        for (let i = 0; i < btnText.length; i++){
            btn.push(<button key={i} className="portfolio-page__btn-filter">{btnText[i]}</button>)
        }
        return btn;
    }

    toggleFilter(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
        document.addEventListener("click", this.hideFilers);
    }

    hideFilers(){
        this.setState({
            isOpen: false,
        });
        document.removeEventListener("click", this.hideFilers);
    }

    addBubbleClass = () => {
        let elems = document.querySelectorAll('.cases__item');
        let elemsToArr = Array.from(elems);
        let arrLength = elemsToArr.length;
        let i = 0;

        setTimeout(function test() {
            elemsToArr[i].classList.add('bubbledClass');
            if(++i < arrLength) setTimeout(test, 40)
        },150);
    };

    render(){
        const {isOpen} = this.state;
        return(
            <div className="portfolio-page">
                <div className="container">
                    <div className="portfolio-page__content">
                        <div className="cases__title">
                            <img src={logo} alt=""/>
                            <h2>latest works</h2>
                        </div>
                        <div className="portfolio-page__filter">
                            <div className={`portfolio-page__filter-wrap ${isOpen ? 'active' : ''}`}>
                                {this.renderFilters()}
                            </div>
                            <button className="toggle-filters"
                                onClick={() => this.toggleFilter()}
                            >filters</button>
                        </div>
                        <div className="portfolio-page__cases-wrap">
                            {this.renderPreview()}
                        </div>
                    </div>
                    <div className="portfolio-page__pagination">
                        <Pagination/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;
