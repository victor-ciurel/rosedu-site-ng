import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onClick: PropTypes.func
  }
  static defaultProps = {
    primary: false,
    secondary: true,
    onClick: PropTypes.func
  }

  get className () {
    const {
      props: { primary, secondary }
    } = this
    let className = 'Button'

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
      props: { children, onClick }
    } = this

    return (
      <button className={this.className} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button
