import React, {Component} from 'react';

import ArticlePreview from './../../components/ArticlePreview';

class MainPageArticles extends Component{

    renderArticlePreview = () => {
        let arr = [];
        for (let i = 0; i < 4; i++ ){
            arr.push(<ArticlePreview key={i} />)
        }
        return arr;
    }


    render(){
        return(
            <section className="main-page__articles">
                <div className="container">
                    <div className="main-page__articles-content">
                        { this.renderArticlePreview() }
                    </div>
                </div>
            </section>
        )
    }


}

export default MainPageArticles;




