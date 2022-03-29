export interface ShowExercises {
  second: boolean
  third: boolean
}

export interface Berry {
  name: string
  url: string
}

export interface Flavors {
  flavor: Berry
  potency: number
}

export interface BerryDetail {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: Berry
  flavors: Flavors[]
  natural_gift_type: Berry
  item: Berry
}


