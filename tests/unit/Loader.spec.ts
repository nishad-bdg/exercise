import { mount } from '@vue/test-utils'
import Loader from '@/components/Loader.vue'

describe('Loader.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('[data-testid="loader"]').exists()).toBeTruthy()
  })
})
