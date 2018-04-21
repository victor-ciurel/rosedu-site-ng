import React from 'react'
import { shallow } from 'enzyme'
import Homepage from './'

describe('Homepage', () => {
  it('renders without exploding', () => {
    shallow(<Homepage />)
  })
})
