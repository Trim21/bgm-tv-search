import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.text()).to.include('some of mine api')
  })
})
