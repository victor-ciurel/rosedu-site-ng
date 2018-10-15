import React, { Component } from 'react'

import Text from './text_translations'

import Title from 'components/common/Title'
import Form from './Form'

import ixiaLogo from './assets/ixia_logo.png'
import bloombergLogo from './assets/bloomberg_logo.png'

import './index.scss'

/**
 * Contact section component
 */
class Contact extends Component {
  static defaultProps = {
    lang: 'ro'
  }

  render () {
    return (
      <div className='Contact'>
        <Title text='Contact' color='#23a94b' />
        <div className='content'>
          <Form lang={this.props.lang} />
          <iframe
            className='Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.874500050432!2d26.045563415467942!3d44.43573650949407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201ebafcdf7a3%3A0xeafb513bd76c5277!2sComputer+Science+College!5e0!3m2!1sen!2sro!4v1535121641646'
          />
        </div>
        <div className='sponsor'>
          <div className='sponsor_title'>
            {Text['sponsors'][this.props.lang]}
          </div>
          <div className='sponsor_images_container'>
            <img className='sponsor_img' src={ixiaLogo} alt='' />
            <img className='sponsor_img' src={bloombergLogo} alt='' />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
