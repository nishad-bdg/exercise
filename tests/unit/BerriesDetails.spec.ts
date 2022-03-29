import { mount, VueWrapper } from '@vue/test-utils'
import BerriesDetails from '@/components/BerriesDetails.vue'
import { BerryDetail } from '../../src/types/exercise'

describe('BerriesDetails.vue', () => {
  let wrapper: VueWrapper
  const detailData: BerryDetail = { "firmness": { "name": "soft", "url": "https://pokeapi.co/api/v2/berry-firmness/2/" }, "flavors": [{ "flavor": { "name": "spicy", "url": "https://pokeapi.co/api/v2/berry-flavor/1/" }, "potency": 10 }, { "flavor": { "name": "dry", "url": "https://pokeapi.co/api/v2/berry-flavor/2/" }, "potency": 0 }, { "flavor": { "name": "sweet", "url": "https://pokeapi.co/api/v2/berry-flavor/3/" }, "potency": 0 }, { "flavor": { "name": "bitter", "url": "https://pokeapi.co/api/v2/berry-flavor/4/" }, "potency": 0 }, { "flavor": { "name": "sour", "url": "https://pokeapi.co/api/v2/berry-flavor/5/" }, "potency": 0 }], "growth_time": 3, "id": 1, "item": { "name": "cheri-berry", "url": "https://pokeapi.co/api/v2/item/126/" }, "max_harvest": 5, "name": "cheri", "natural_gift_power": 60, "natural_gift_type": { "name": "fire", "url": "https://pokeapi.co/api/v2/type/10/" }, "size": 20, "smoothness": 25, "soil_dryness": 15 }

  const propsData = {
    detailData: detailData
  }

  beforeEach(() => {
    wrapper = mount(BerriesDetails, {
      propsData: propsData
    })
  })

  it('detailData props passed correctly', () => {
    expect(wrapper.props('detailData').firmness.name).toBe(propsData.detailData.firmness.name)
  })

  it('renders title correctly', () => {
    const title = wrapper.find('[data-testid="name"]')
    expect(title.text()).toBe(propsData.detailData.name.toUpperCase())
  })

  it('renders id correctly', () => {
    const id = wrapper.find('[data-testid="id"]')
    expect(Number(id.text())).toBe(propsData.detailData.id)
  })

  it('renders name correctly', () => {
    const name = wrapper.find('[data-testid="title"]')
    expect(name.text()).toBe(propsData.detailData.name)
  })

  it('renders growth_time correctly', () => {
    const growth_time = wrapper.find('[data-testid="growthTime"]')
    expect(Number(growth_time.text())).toBe(propsData.detailData.growth_time)
  })

  it('renders max_harvest correctly', () => {
    const max_harvest = wrapper.find('[data-testid="maxHarvest"]')
    expect(Number(max_harvest.text())).toBe(propsData.detailData.max_harvest)
  })

  it('renders natural_gift_power correctly', () => {
    const natural_gift_power = wrapper.find('[data-testid="naturalGiftPower"]')
    expect(Number(natural_gift_power.text())).toBe(propsData.detailData.natural_gift_power)
  })

  it('renders size correctly', () => {
    const size = wrapper.find('[data-testid="size"]')
    expect(Number(size.text())).toBe(propsData.detailData.size)
  })

  it('renders smoothness correctly', () => {
    const smoothness = wrapper.find('[data-testid="smoothness"]')
    expect(Number(smoothness.text())).toBe(propsData.detailData.smoothness)
  })

  it('renders soil_dryness correctly', () => {
    const soil_dryness = wrapper.find('[data-testid="soilDryness"]')
    expect(Number(soil_dryness.text())).toBe(propsData.detailData.soil_dryness)
  })

  it('renders flavor correctly', () => {
    const flavor = wrapper.find('[data-testid="flavor"]')
    const listData = flavor.findAll('[data-testid="flavorName"]')
    for (let i in listData) {
      expect(listData[i].text()).toBe(propsData.detailData.flavors[i].flavor.name.toUpperCase())
    }
  })


})