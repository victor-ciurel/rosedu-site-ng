import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

/**
 * Project component
 */
class Project extends Component {
  static propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
    website: PropTypes.string
  }
  static defaultProps = {
    logo: '',
    title: '',
    website: ''
  }

  render () {
    const {
      props: { logo, title, website }
    } = this

    return (
      <a href={website} className='Project'>
        <img src={logo} alt={title} />
        <div className='text'>
          <h1>{title}</h1>
          <h2>{website}</h2>
        </div>
      </a>
    )
  }
}

export default Project
