import React, { Component } from 'react'

import Title from 'components/common/Title'

import Form from './Form'

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
        </div>
      </div>
    )
  }
}

export default Contact
