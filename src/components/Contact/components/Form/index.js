import React, { Component } from 'react'
import PropTypes from 'prop-types'

import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import slack from './assets/slack.svg'

import './index.scss'

class Form extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Form'>
        <p>
          Vivamus tincidunt quis elit viverra vestibulum. Nullam condimentum
          pellentesque nulla, et accumsan orci posuere ut. Sed semper, massa in
          interdum condimentum, urna velit molestie nisl, nec pellentesque
          mauris lorem at arcu. Phasellus eget nibh quis nunc porttitor varius.
          Suspendisse potenti. Nulla facilisi. Nam iaculis mi vel velit ornare
          consectetur.
        </p>
        <div className='social'>
          <span>
            <img src={twitter} />
            @rosedu
          </span>
          <span>
            <img src={facebook} />
            /rosedu
          </span>
          <span>
            <img src={slack} />
            #rosedu
          </span>
        </div>
      </div>
    )
  }
}

export default Form
