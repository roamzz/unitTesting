import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber'

describe('RandomNumber', () => {
    //Here, we’re using the wrapper to get the html of our RandomNumber component, and asserting that we expect that html toContain a span with a 0 in its inner HTML.
    test('By default, randomNumber data value should be 0', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
      })


      test('If button is clicked, randomNumber should be between 1 and 10', async () => {
        const wrapper = mount(RandomNumber)
        wrapper.find('button').trigger('click')
      
        await wrapper.vm.$nextTick() 
        //In order to access that number within the rendered html, we can write:
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        // This effectively finds the span, and accesses that element’s text content. But because we need that content to be an integer, we’ve wrapped in in parseInt.
      })

      test('If button is clicked, randomNumber should be between 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
          propsData: {
            min: 200,
            max: 300
          }
        })
        wrapper.find('button').trigger('click')
        await wrapper.vm.$nextTick() 
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
      })
})