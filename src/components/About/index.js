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
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
          <div className='people'>{this.people}</div>
        </div>
      </div>
    )
  }
}

export default About
