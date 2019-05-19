import React from 'react';
import Slide from './slide/Slide'
import Diferenciais from './diferenciais/Diferenciais'
import Servicos from './servicos/Servicos'
import Email from './email/Email'

export default props =>
    <React.Fragment>
        <Slide />
        <Diferenciais />
        <Servicos />
        <Email />
    </React.Fragment>

