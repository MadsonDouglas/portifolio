import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default props =>
        <div className="menu">
            <div className="logo">
                <Link to="/">
                    <p><span>D</span>EV  <span>F</span>ullStack</p>
                </Link>
            </div>
            <div className="navegacao">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/trabalhos">Trabalhos</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>
        </div>