import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/common/Button'

import facebook from './assets/facebook.png'
import headerImage from './assets/header.png'
import roseduLogo from './assets/logoWhite.svg'
import slack from './assets/slack.svg'
import mail from './assets/mail.svg'

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
            <a href='#about'>
              <span>despre noi</span>
            </a>
            <a href='#projects'>
              <span>proiecte</span>
            </a>
            <a href='#contact'>
              <span>contact</span>
            </a>
            <a href='https://rosedu.herokuapp.com/' target='_blank'>
              <img src={slack} alt='' />
            </a>
            <a href='https://www.facebook.com/rosedu.org' target='_blank'>
              <img src={facebook} alt='' />
            </a>
            <a
              href='http://lists.rosedu.org/listinfo/rosedu-general'
              target='_blank'
            >
              <img src={mail} alt='' />
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
