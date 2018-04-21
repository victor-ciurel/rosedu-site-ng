import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import '../index.scss'

/**
 * Homepage page component
 */
class Home extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <Fragment>
        <Header />
      </Fragment>
    )
  }
}

export default Home
