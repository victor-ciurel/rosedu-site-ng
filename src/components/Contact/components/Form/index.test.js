import React from 'react'
import { shallow } from 'enzyme'
import Form from './'

describe('Form', () => {
  it('renders without exploding', () => {
    shallow(<Form />)
  })
})
