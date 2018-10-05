import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ArticlePreview from './../../components/ArticlePreview';

class MainPageArticles extends Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        }
    }

    componentDidMount(){
        this.setState({
            mounted: true
        })
    }

    renderArticlePreview = () => {
        let arr = [];
        for (let i = 0; i < 4; i++ ){
            arr.push(<ArticlePreview  />)
        }
        return arr;
    };

    render(){
        const artPreview = this.renderArticlePreview();
        const {mounted} = this.state;
        return(
            <section className="main-page__articles">
                <div className="container">
                    <div className="main-page__articles-content">
                        {
                            artPreview.map((item,id) => {
                                return(
                                    <CSSTransition
                                        in={mounted}
                                        timeout={2000}
                                        unmountOnExit
                                        classNames="prevArt"
                                        key={id}
                                    >
                                        <div>
                                            {item}
                                        </div>
                                    </CSSTransition>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default MainPageArticles;
