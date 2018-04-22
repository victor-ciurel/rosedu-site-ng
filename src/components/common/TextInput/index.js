import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

/**
 * Generic textInput component
 *
 * Provides a textbox with various props
 */
class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    acceptsBlankValue: PropTypes.bool,
    validator: PropTypes.func,
    onChange: PropTypes.func
  }
  static defaultProps = {
    label: '',
    image: '',
    type: 'text',
    value: '',
    acceptsBlankValue: false,
    validator: () => true,
    onChange: () => {}
  }

  state = {
    value: ''
  }

  componentDidMount () {
    if (this.props.value !== '') {
      this.setState({ value: this.props.value })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== '') {
      this.setState({ value: nextProps.value })
    } else if (nextProps.acceptsBlankValue) {
      this.setState({ value: '' })
    }
  }

  onChange = e => {
    const { onChange } = this.props
    const { value } = e.target
    this.setState({ value })

    onChange(value)
  }

  get inputIsValid () {
    const { value } = this.state
    const { validator } = this.props

    if (value === '') {
      return true
    } else {
      return validator(value)
    }
  }

  get className () {
    const { value } = this.state
    let className = 'TextInput'

    if (!this.inputIsValid) {
      className += ' error'
    }

    if (value !== '') {
      className += ' active'
    }

    return className
  }

  get image () {
    const { image } = this.props

    if (image !== '') {
      return <img src={image} alt='' className='image' />
    } else {
      return null
    }
  }

  render () {
    const { label, type } = this.props
    const { value } = this.state

    return (
      <div className={this.className}>
        <input type={type} value={value} onChange={this.onChange} />
        <label> {label} </label>
        {this.image}
      </div>
    )
  }
}

export default TextInput
