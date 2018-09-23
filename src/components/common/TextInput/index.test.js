import React from 'react'
import { shallow } from 'enzyme'
import TextInput from './'

describe('TextInput', () => {
  it('renders without exploding', () => {
    shallow(<TextInput />)
  })

  // it('calls onChange function', () => {
  //   const props = {
  //     onChange: jest.fn()
  //   }
  //   const wrapper = shallow(<TextInput {...props} />)
  //   wrapper.find('input').simulate('change', { target: { value: 'a' } })
  //
  //   expect(props.onChange).toBeCalledWith('a')
  // })
  //
  // it('shows error state based on validator', () => {
  //   const props = {
  //     validator: () => false
  //   }
  //   const wrapper = shallow(<TextInput {...props} />)
  //   wrapper.find('input').simulate('change', { target: { value: 'a' } })
  //   expect(wrapper.hasClass('error')).toBe(true)
  // })
  //
  // it('correctly updates values with props change', () => {
  //   const wrapper = shallow(<TextInput />)
  //   wrapper.find('input').simulate('change', { target: { value: 'testing' } })
  //   expect(wrapper.state().value).toEqual('testing')
  //
  //   // Updating props
  //   wrapper.setProps({ onChange: () => {} })
  //   expect(wrapper.state().value).toEqual('testing')
  // })
  //
  // it('correctly resets value on props change', () => {
  //   const props = {
  //     value: 'test1'
  //   }
  //   const wrapper = shallow(<TextInput {...props} />)
  //   expect(wrapper.state().value).toEqual('test1')
  //
  //   // We type something
  //   wrapper.find('input').simulate('change', { target: { value: 'test2' } })
  //   expect(wrapper.state().value).toEqual('test2')
  //
  //   // We receive new props
  //   wrapper.setProps({ value: 'test3' })
  //   expect(wrapper.state().value).toEqual('test3')
  //
  //   // We type something again
  //   wrapper.find('input').simulate('change', { target: { value: 'test4' } })
  //   expect(wrapper.state().value).toEqual('test4')
  // })
  //
  // it('resets to blank if correct prop passed', () => {
  //   const props = {
  //     acceptsBlankValue: true
  //   }
  //   const wrapper = shallow(<TextInput {...props} />)
  //   wrapper.find('input').simulate('change', { target: { value: 'test' } })
  //   expect(wrapper.state().value).toEqual('test')
  //
  //   wrapper.setProps({ value: '' })
  //   expect(wrapper.state().value).toEqual('')
  // })

  it("doesn't show error state if empty input", () => {
    const props = {
      validator: () => false
    }
    const wrapper = shallow(<TextInput {...props} />)
    expect(wrapper.hasClass('error')).toBe(false)
  })

  it('shows passed image', () => {
    const wrapper = shallow(<TextInput image='test' />)
    const img = wrapper.find('img')
    expect(img.props().src).toBe('test')
  })

  it("doesn't add image if no prop", () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('img')).toHaveLength(0)
  })

  it('shows passed label', () => {
    const wrapper = shallow(<TextInput label='Testlabel' />)
    expect(wrapper.text()).toContain('Testlabel')
  })

  it('adds active class if input not empty', () => {
    const wrapper = shallow(<TextInput />)
    wrapper.setState({ value: 'test' })
    expect(wrapper.hasClass('active')).toBe(true)
  })

  it('passes type prop to input', () => {
    const wrapper = shallow(<TextInput type='password' />)
    expect(wrapper.find('input').props().type).toBe('password')
  })

  it('sets passed value', () => {
    const wrapper = shallow(<TextInput value='test' />)
    expect(wrapper.state().value).toEqual('test')
  })

  it('sets passed value on prop change', () => {
    const wrapper = shallow(<TextInput value='test' />)
    expect(wrapper.state().value).toEqual('test')

    wrapper.setProps({ value: 'test2' })
    expect(wrapper.state().value).toEqual('test2')
  })
})
