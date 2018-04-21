import React from 'react'
import { shallow } from 'enzyme'
import Button from './'

describe('Button', () => {
  it('renders without exploding', () => {
    shallow(<Button />)
  })

  it('displays passed children', () => {
    const wrapper = shallow(<Button>Test</Button>)
    expect(wrapper.text()).toContain('Test')
  })

  it('sets primary, secondary class based on prop', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.hasClass('secondary')).toBe(true)

    wrapper.setProps({ primary: true })
    expect(wrapper.hasClass('primary')).toBe(true)

    wrapper.setProps({ primary: false, secondary: true })
    expect(wrapper.hasClass('primary')).toBe(false)
    expect(wrapper.hasClass('secondary')).toBe(true)
  })

  it('calls passed function on click', () => {
    const props = {
      onClick: jest.fn()
    }
    const wrapper = shallow(<Button {...props} />)
    wrapper.simulate('click')
    expect(props.onClick).toBeCalled()
  })
})
