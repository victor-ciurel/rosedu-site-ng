import React from 'react'
import { shallow } from 'enzyme'
import About from './'

describe('About', () => {
  it('renders without exploding', () => {
    shallow(<About />)
  })
})
