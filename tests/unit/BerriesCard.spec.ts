import { mount, VueWrapper } from '@vue/test-utils'
import BarriesCard from '@/components/BerriesCard.vue'
import { Berry } from '../../src/types/exercise'


describe('BarriesCard.vue', () => {
  let wrapper: VueWrapper<any>
  const berries: Berry[] = [
    { name: "cheri", url: "https://pokeapi.co/api/v2/berry/1/" }
  ]
  const propsData = {
    berries: berries
  }

  beforeEach(() =>{
    wrapper = mount(BarriesCard, {
      propsData: propsData
    })
  })

  it('berries passed correctly', () => {
    expect(wrapper.props('berries').length).toBe(propsData.berries.length)
  })

  it('renders berries name', () => {
    const data = wrapper.find('[data-testid="link"]')
    expect(data.text()).toBe(propsData.berries[0].name.toUpperCase())
  })
})