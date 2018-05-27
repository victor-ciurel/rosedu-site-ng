import React, { Component, Fragment } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Header from 'components/Header'
import About from 'components/About'
import Projects from 'components/Projects'
import Contact from 'components/Contact'

import people from 'assets/people.json'
import projects from 'assets/projects.json'

import '../index.scss'

/**
 * Homepage page component
 */
class Home extends Component {
  render () {
    return (
      <Fragment>
        <Header />

        <ScrollableAnchor id={'about'}>
          <About people={people} />
        </ScrollableAnchor>

        <ScrollableAnchor id={'projects'}>
          <Projects projects={projects} />
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
      </Fragment>
    )
  }
}

export default Home
