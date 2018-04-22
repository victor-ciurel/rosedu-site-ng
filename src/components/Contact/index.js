import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'components/common/Title'

import Form from './components/Form'
import Sponsorship from './components/Sponsorship'

import './index.scss'

/**
 * Contact section component
 */
class Contact extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Contact'>
        <Title text='contact' color='#23a94b' />
        <div className='content'>
          <Form />
          <Sponsorship />
        </div>
      </div>
    )
  }
}

export default Contact
