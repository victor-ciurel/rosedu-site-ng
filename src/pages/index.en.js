import React, { Component, Fragment } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Header from 'components/Header'
import About from 'components/About'
import Projects from 'components/Projects'
import Sponsorship from 'components/Sponsorship'
import Contact from 'components/Contact'

import people from 'assets/people.js'
import projects from 'assets/projects/projects.js'

import '../index.scss'

/**
 * Homepage page component
 */
class Home extends Component {
  render () {
    return (
      <Fragment>
        <Header lang={'en'} />

        <ScrollableAnchor id={'about'}>
          <About people={people} lang={'en'} />
        </ScrollableAnchor>

        <ScrollableAnchor id={'projects'}>
          <Projects projects={projects} lang={'en'} />
        </ScrollableAnchor>

        <ScrollableAnchor id={'sponsorship'}>
          <Sponsorship lang={'en'} />
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
          <Contact lang={'en'} />
        </ScrollableAnchor>
      </Fragment>
    )
  }
}

export default Home
