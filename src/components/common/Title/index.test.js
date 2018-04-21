import React from 'react'
import { shallow } from 'enzyme'
import Title from './'

describe('Title', () => {
  it('renders without exploding', () => {
    shallow(<Title />)
  })

  it('renders passed text prop', () => {
    const props = {
      text: 'test'
    }
    const wrapper = shallow(<Title {...props} />)
    expect(wrapper.text()).toContain('test')
  })

  it('renders passed bolded prop', () => {
    const props = {
      bolded: 'test'
    }
    const wrapper = shallow(<Title {...props} />)
    expect(wrapper.text()).toContain('test')
  })

  it('renders bolded prop in span', () => {
    const props = {
      bolded: 'test'
    }
    const wrapper = shallow(<Title {...props} />)
    expect(wrapper.find('span')).toHaveLength(1)
  })

  it('sets custom color based on prop', () => {
    const wrapper = shallow(<Title color='red' />)
    expect(wrapper.props().style.color).toEqual('red')
  })
})
