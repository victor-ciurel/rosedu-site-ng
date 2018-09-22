import React from 'react'
import { shallow } from 'enzyme'
import Person from './'

describe('Person', () => {
  it('renders without exploding', () => {
    shallow(<Person />)
  })

  it('renders passed image', () => {
    const wrapper = shallow(<Person photo='test' />)
    const img = wrapper.find('img')
    expect(img.props().src).toEqual('test')
  })

  it('renders passed name', () => {
    const wrapper = shallow(<Person name='Ion Popescu' />)
    expect(wrapper.text()).toContain('Ion Popescu')
  })

  it('renders passed position', () => {
    const wrapper = shallow(<Person position='Big Boss' />)
    expect(wrapper.text()).toContain('Big Boss')
  })

  it('renders default image if none passed', () => {
    const wrapper = shallow(<Person />)
    const img = wrapper.find('img')
    expect(img.props().src).not.toEqual('')
  })

  it('renders social block only if props passed', () => {
    const wrapper = shallow(<Person />)
    expect(wrapper.find('.social')).toHaveLength(0)

    wrapper.setProps({ facebook: 'test' })
    expect(wrapper.find('.social')).toHaveLength(1)
  })
})
