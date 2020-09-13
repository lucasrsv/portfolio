import React from 'react'
import Intro from './home_components/intro'
import Projects from './home_components/projects'
import Skills from './home_components/skills'
import Certificates from './home_components/certificates'

export default props => (
    <div className="content">
        <Intro />
        <Projects />
        <Skills />
        <Certificates />
    </div>
)