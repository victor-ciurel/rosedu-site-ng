import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/common/Button'

import './index.scss'

class Header extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Header'>
        <Button> Vezi proiectele noastre </Button>
        <Button primary> Susține ROSEdu </Button>
      </div>
    )
  }
}

export default Header
