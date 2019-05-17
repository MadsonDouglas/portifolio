import React from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'

import Nav from '../template/Nav'


import Github from '../github/Github'
export default props =>
        <HashRouter>
                <div className="app">
                        <Nav />
                        <Routes />
                        <Github />
                </div>
        </HashRouter>