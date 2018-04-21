import React, { Component, Fragment } from 'react'

import Header from 'components/Header'
import About from 'components/About'

import people from 'assets/people.json'

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
      </Fragment>
    )
  }
}

export default Home
