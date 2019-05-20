import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home'
import Sobre from '../sobre'
import Trabalhos from '../trabalhos'
import Blog from '../blog'
export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/trabalhos' component={Trabalhos} />
        <Route path='/blog' component={Blog} />
        <Redirect from='*' to='/' />
    </Switch>