import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/style/common.css';

import * as routes from './constants/routes'

import Header from './containers/Header';
import Footer from './containers/Footer';
import MainPage from './containers/MainPage'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                    <main className="main-content">
                        <Route to={routes.MAIN_PAGE} component={MainPage}/>
                    </main>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
