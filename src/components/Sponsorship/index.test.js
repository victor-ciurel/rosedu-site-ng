import React from 'react'
import { shallow } from 'enzyme'
import Sponsorship from './index'

describe('Sponsorship', () => {
  it('renders without exploding', () => {
    shallow(<Sponsorship />)
  })
})
