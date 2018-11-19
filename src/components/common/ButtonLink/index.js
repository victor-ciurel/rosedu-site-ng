import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class ButtonLink extends Component {
  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    target: PropTypes.string
  }
  static defaultProps = {
    primary: false,
    secondary: true,
    target: PropTypes.string
  }

  get className () {
    const {
      props: { primary, secondary }
    } = this
    let className = 'ButtonLink'

    if (primary) {
      className += ' primary'
    }

    if (secondary) {
      className += ' secondary'
    }

    return className
  }

  render () {
    const {
      props: { children, target }
    } = this
    return (
      <a className={this.className} href={target}>
        {children}
      </a>
    )
  }
}

export default ButtonLink
