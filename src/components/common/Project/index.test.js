import React from 'react'
import { shallow } from 'enzyme'
import Project from './'

describe('Project', () => {
  it('renders without exploding', () => {
    shallow(<Project />)
  })

  it('renders passed logo', () => {
    const wrapper = shallow(<Project logo='test' />)
    const img = wrapper.find('img')
    expect(img.props().src).toEqual('test')
  })

  it('renders passed title', () => {
    const wrapper = shallow(<Project title='test' />)
    expect(wrapper.text()).toContain('test')
  })
})
