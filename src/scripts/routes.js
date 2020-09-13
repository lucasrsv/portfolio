import React from 'react'
import Home from './components/home'
import Intro from './components/home_components/intro'
import Projects from './components/home_components/projects'
import Skills from './components/home_components/skills'
import Certificates from './components/home_components/certificates'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

export default props => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/projects" component={Projects} />
        <Route path="/intro" component={Skills} />
        <Route path="/intro" component={Certificates} />
        <Redirect from='*' to='/' />
    </Switch>
)