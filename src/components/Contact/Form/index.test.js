import React from 'react'
import { shallow } from 'enzyme'
import Form from './index'

describe('Form', () => {
  it('renders without exploding', () => {
    shallow(<Form />)
  })
})
