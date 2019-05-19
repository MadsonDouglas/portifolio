import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn,MdCall } from 'react-icons/md'

import './Footer.css';

export default props =>
<footer className="footer-distributed">

<div className="footer-left">

    <div className="logo">
        <p><span>D</span>EV  <span>F</span>ullStack</p>
    </div>
    <p className="footer-company-name">Dev FullStack &copy; 2015</p>

</div>

<div className="footer-center">

    <div>
    <MdLocationOn className='icons-footer' />
        <p><span>253, rua monsenhor freitas</span> Parazinho RN, brasil</p>
    </div>

    <div>
    <MdCall className='icons-footer'/>
        <p>+1 555 123456</p>
    </div>

    <div>
        <FaEnvelope className='icons-footer' />
        <p><a href="/">support@dellfullstack.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>Sobre nós</span>
        Este é um portifólio criado em reactJS para apresentar os meus trabalhos futuro no ramo da programação.
    </p>

    <div className="footer-icons">
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="http://www.instagram.com/_1madson" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>

</div>

</footer>
