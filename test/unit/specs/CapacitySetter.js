import Vue from 'vue'
import CapacitySetter from '@/components/CapacitySetter'

describe('CapacitySetter.vue', () => {
  it('should have the correct initial capacity', () => {
    const Constructor = Vue.extend(CapacitySetter, {propsData: {stageName: 'stage', initialCapacity: 10}})
    const vm = new Constructor().$mount()
    expect(vm.currCapacity).toEqual(10)
  })
})
