import React from 'react'
import { shallow } from 'enzyme'
import About from './'

import people from 'assets/people.js'

describe('About', () => {
  it('renders without exploding', () => {
    shallow(<About people={people} />)
  })
})
