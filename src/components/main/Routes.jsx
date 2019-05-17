import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home'
import Sobre from '../sobre'
import Trabalhos from '../trabalhos'
import Blog from '../blog'
import Port from '../portfolio'
export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/trabalhos' component={Trabalhos} />
        <Route path='/blog' component={Blog} />
        <Route path='/portfolio' component={Port} />
        <Redirect from='*' to='/' />
    </Switch>