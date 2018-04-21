import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

/**
 * Generic title component that supports custom font color
 * and bolded text
 */
class Title extends Component {
  static propTypes = {
    text: PropTypes.string,
    bolded: PropTypes.string,
    color: PropTypes.string
  }
  static defaultProps = {
    text: '',
    bolded: '',
    color: 'currentColor'
  }

  get style () {
    const {
      props: { color }
    } = this

    return { color }
  }

  get bolded () {
    const {
      props: { bolded }
    } = this

    if (bolded === '') {
      return null
    }

    return <span className='bolded'>{bolded}</span>
  }

  render () {
    const {
      props: { text },
      bolded,
      style
    } = this

    return (
      <div className='Title' style={style}>
        {text}
        {bolded}
      </div>
    )
  }
}

export default Title
