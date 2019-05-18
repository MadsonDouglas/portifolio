import React from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'

import Nav from '../template/Nav'
import Footer from '../template/Footer'


export default props =>
        <HashRouter>
                <div className="app">
                        <Nav />
                        <Routes />
                        <Footer />
                </div>
        </HashRouter>