import React, { Component } from 'react'

import Text from './text_translations'

import ButtonLink from 'components/common/ButtonLink'

import facebook from './assets/facebook.png'
import headerImage from './assets/logo_principal.jpg'
import roseduLogo from './assets/logoWhite.svg'
import slack from './assets/slack.svg'
import mail from './assets/mail.svg'
import roPhoto from './assets/ro_photo.png'
import usPhoto from './assets/us_photo.png'

import './index.scss'

class Header extends Component {
  static defaultProps = {
    lang: 'ro'
  }

  getTranslateButton () {
    let url

    url = typeof window !== 'undefined' && window.location.href
    if (this.props.lang === 'en') {
      if (url) {
        url = url.substr(0, url.length - 1)
        url = url.substr(0, url.lastIndexOf('/') + 1)
      }
      return (
        <a href={url}>
          <img src={roPhoto} className='translate_button' />
        </a>
      )
    }
    url += 'en'
    return (
      <a href='en'>
        <img src={usPhoto} className='translate_button' />
      </a>
    )
  }

  render () {
    return (
      <div className='Header'>
        <header>
          <img src={roseduLogo} alt='' />
          <nav>
            <a href='#about'>
              <span>{Text['about_us_header'][this.props.lang]}</span>
            </a>
            <a href='#projects'>
              <span>{Text['projects_header'][this.props.lang]}</span>
            </a>
            <a href='#contact'>
              <span>{Text['contact_header'][this.props.lang]}</span>
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
          <ButtonLink primary target={'#sponsorship'}>
            {Text['support_header_button'][this.props.lang]}
          </ButtonLink>
          {this.getTranslateButton()}
        </header>
        <main>
          <div className='text'>
            <h2>{Text['title_1'][this.props.lang]}</h2>
            <h1>{Text['title_2'][this.props.lang]}</h1>

            <p>{Text['content'][this.props.lang]}</p>

            <ButtonLink target={'#projects'}>
              {Text['projects_button'][this.props.lang]}
            </ButtonLink>
          </div>
          <img className='header_logo' src={headerImage} alt='' />
        </main>
      </div>
    )
  }
}

export default Header
