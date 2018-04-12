import {mount} from '@vue/test-utils'
import CapacitySetter from '@/components/CapacitySetter'

describe('CapacitySetter.vue', () => {
  var data = {}
  var sut
  beforeEach(() => {
    data = {stageName: 'stage', value: '33'}
    sut = mount(CapacitySetter, {propsData: data})
  })
  it('should render an input type text within a label', () => {
    expect(sut.find('label > input')).toBeTruthy()
  })
  it('should show the initial capacity', () => {
    expect(sut.vm.value).toBe('33')
  })
  it('should change the component value when the input field is changed', () => {
    sut.find('input').element.value = '22'
    sut.find('input').trigger('input')
    expect(sut.emitted().input.length).toBe(1)
  })
})
