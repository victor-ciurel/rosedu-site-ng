import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/common/Button'

import roseduLogo from './assets/logoWhite.svg'
import youtube from './assets/youtube.svg'
import slack from './assets/slack.svg'
import twitter from './assets/twitter.svg'
import headerImage from './assets/header.png'

import './index.scss'

class Header extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Header'>
        <header>
          <img src={roseduLogo} alt='' />
          <nav>
            <a href='/'>
              <span>despre noi</span>
            </a>
            <a href='/'>
              <span>proiecte</span>
            </a>
            <a href='/'>
              <span>contact</span>
            </a>
            <a href='/'>
              <img src={youtube} alt='' />
            </a>
            <a href='/'>
              <img src={twitter} alt='' />
            </a>
            <a href='/'>
              <img src={slack} alt='' />
            </a>
          </nav>
          <Button primary>Susține ROSEdu!</Button>
        </header>
        <main>
          <div className='text'>
            <h2>Susținem o educație</h2>
            <h1>open source</h1>

            <p>
              ROSEdu este o organizație open source dedicată promovării și
              dezvoltării software-ului liber. Ut a eros blandit, mattis ligula
              at, dignissim eros. Cras ut vulputate eros.
            </p>

            <Button> Vezi proiectele noastre </Button>
          </div>
          <img src={headerImage} alt='' />
        </main>
      </div>
    )
  }
}

export default Header
