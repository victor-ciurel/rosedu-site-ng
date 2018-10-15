import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Text from './text_translations'
import Title from 'components/common/Title'
import Person from 'components/common/Person'

import './index.scss'

/**
 *  About section component
 */
class About extends Component {
  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    people: [],
    lang: 'ro'
  }

  get people () {
    return this.props.people.map((x, i) => <Person key={i} {...x} />)
  }

  render () {
    return (
      <div className='About'>
        <Title
          text={Text['title_1'][this.props.lang]}
          bolded={Text['title_2'][this.props.lang]}
          color='white'
        />
        <div className='content'>
          <div className='text'>
            <p className='about_text'>{Text['paragraph_1'][this.props.lang]}</p>
            <p className='about_text'>{Text['paragraph_2'][this.props.lang]}</p>
          </div>
          <div className='people'>{this.people}</div>
        </div>
      </div>
    )
  }
}

export default About
