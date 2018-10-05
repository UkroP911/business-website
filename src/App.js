import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import './assets/style/common.css';
import './assets/style/btn_input.css'

import AnimatedPages from './AnimatedPages';

class App extends Component {
    render() {
        return (
            <Router>

                    <AnimatedPages/>

            </Router>
        );
    }
}

export default App;
