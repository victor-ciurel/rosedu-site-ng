import React from 'react'
import { shallow } from 'enzyme'
import Sponsorship from './'

describe('Sponsorship', () => {
  it('renders without exploding', () => {
    shallow(<Sponsorship />)
  })
})
