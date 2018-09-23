import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    people: []
  }

  get people () {
    return this.props.people.map((x, i) => <Person key={i} {...x} />)
  }

  render () {
    return (
      <div className='About'>
        <Title text='despre' bolded='noi' color='#ef4924' />
        <div className='content'>
          <div className='text'>
            <p className='about_text'>
              ROSEdu crede în importanța educației si a procesului de învățare.
              Credem că, prin comunicare și colaborare, putem învăța unul de la
              celălalt sa dezvoltăm lucruri noi și șa contribuim la proiecte
              existente. Open Source este pentru noi, însuși mediul in care
              suntem activi, formand o retea de oameni deschisi, proiecte ci
              activitați lipite impreuna de technologie si internet, ceea ce ne
              permite cooperarea si schimbul cosntant de idei.
            </p>
            <p className='about_text'>
              Majoritatea membrilor Rosedu sunt in prezent studenti sau
              absolventi ai Universitatii Politehnica din București, dar noi
              suntem intotdeauna bucuroși de noi memberi, indfiderent de unde
              provin. Te asteptam și pe tine!
            </p>
          </div>
          <div className='people'>{this.people}</div>
        </div>
      </div>
    )
  }
}

export default About
