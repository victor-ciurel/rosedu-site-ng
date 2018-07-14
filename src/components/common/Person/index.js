import React, { Component } from 'react'
import PropTypes from 'prop-types'

import facebookImage from './assets/facebook.svg'
import defaultUser from './assets/default.png'

import './index.scss'

/**
 * Generic Person component with social links
 */
class Person extends Component {
  static propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    facebook: PropTypes.string
  }
  static defaultProps = {
    photo: '',
    name: '',
    position: '',
    facebook: ''
  }

  getSocialImage = ({ url, img }) => {
    if (url === '') {
      return null
    }

    return (
      <a href={url} target='_blank'>
        <img src={img} alt='' />
      </a>
    )
  }

  get socialBlock () {
    const {
      props: { photo, facebook },
      getSocialImage
    } = this

    if (facebook === '') {
      return null
    }

    return (
      <div className='social'>
        {getSocialImage({ url: facebook, img: facebookImage })}
      </div>
    )
  }

  get photo () {
    const {
      props: { photo }
    } = this

    if (photo === '') {
      return defaultUser
    } else {
      return photo
    }
  }

  render () {
    const {
      props: { name, position },
      photo,
      socialBlock
    } = this

    return (
      <div className='Person'>
        <div className='main'>
          <img src={photo} alt='' />
          {socialBlock}
        </div>
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
    )
  }
}

export default Person
