import React from 'react'
import { shallow } from 'enzyme'
import Projects from './'

describe('Projects', () => {
  it('renders without exploding', () => {
    shallow(<Projects />)
  })
})
