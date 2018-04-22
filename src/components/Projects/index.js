import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

import Title from 'components/common/Title'
import Button from 'components/common/Button'
import Project from 'components/common/Project'

/**
 * Projects section component
 */
class Projects extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
  }
  static defaultProps = {
    projects: []
  }

  render () {
    const {
      props: { projects }
    } = this

    return (
      <div className='Projects'>
        <Title text='proiecte' color='#fff' />

        <div className='content'>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat
            </p>
            <p>
              Vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et iusto odio dignissim qui blandit praesent luptatum
              zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
            <Button> Vrei să te implici ? </Button>
          </div>
          <div className='list'>
            {projects.map((x, i) => <Project key={i} {...x} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
