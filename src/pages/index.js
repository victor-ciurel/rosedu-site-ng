import React, { Component, Fragment } from 'react'

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
        <About people={people} />
        <Projects projects={projects} />
        <Contact />
      </Fragment>
    )
  }
}

export default Home
