import React from 'react'
import './App.css'

import Nav from '../template/Nav'
import Slide from '../slide/Slide'
import Diferenciais from '../diferenciais/Diferenciais'
import Sevicos from '../servicos/Servicos'
export default props =>
        <div className="app">
                <Nav />
                <Slide/>
                <Diferenciais />
                <Sevicos />
        </div>