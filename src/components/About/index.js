import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Text from './text_translations'
import Title from 'components/common/Title'
import Person from 'components/common/Person'
import Button from '../common/Button'

import './index.scss'

/**
 *  About section component
 */
class About extends Component {
  static propTypes = {
    people: PropTypes.object
  }

  static defaultProps = {
    people: [],
    lang: 'ro'
  }

  state = {
    showAllMembers: false
  }

  toggleShowAllMembers = () => {
    this.setState({ showAllMembers: !this.state.showAllMembers })
  }

  mainMembers = () => {
    return this.props.people['main_members'].map((x, i) => (
      <Person key={'member_' + i} {...x} />
    ))
  }

  allMembers = () => {
    let allMembers = this.props.people['main_members'].concat(
      this.props.people['extra_members']
    )
    return allMembers.map((x, i) => <Person key={'member_' + i} {...x} />)
  }

  showMainMembersButton = () => {
    return (
      <Button onClick={this.toggleShowAllMembers}>
        {Text['button_main_members'][this.props.lang]}
      </Button>
    )
  }

  showAllMembersButton = () => {
    return (
      <Button onClick={this.toggleShowAllMembers}>
        {Text['button_extra_members'][this.props.lang]}
      </Button>
    )
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
          <div className='people'>
            {this.state.showAllMembers ? this.allMembers() : this.mainMembers()}
            {this.state.showAllMembers
              ? this.showMainMembersButton()
              : this.showAllMembersButton()}
          </div>
        </div>
      </div>
    )
  }
}

export default About
