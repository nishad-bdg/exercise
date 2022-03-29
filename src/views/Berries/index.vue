<template>
  <div class="container">
    <h1 class="font-medium leading-tight text-5xl mt-9 mb-2 text-yellow-600">
      Berry Categories
    </h1>
    <div v-if="loading">
      <Loader />
    </div>
    <div
      v-else
      class="grid lg:grid-cols-4 md:grid-cols-2 gap-4 hover:transition-all"
    >
      <BerriesCard :berries="berries"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Loader from '../../components/Loader.vue'
import BerriesCard from '../../components/BerriesCard.vue'

import { Berry } from '../../types/exercise'
import snackbar from '../../helpers/snackbar'

const loading = ref<boolean>(false)
const berries = ref<Berry[]>([])

onMounted(async () => {
  loading.value = true
  try {
    const response = await fetch('https://pokeapi.co/api/v2/berry')
    const data = await response.json()
    berries.value = data.results
    snackbar('API data fetched Successfully','top-right','success')
  } catch (error) {
    snackbar(error)
  }
  loading.value = false
})
</script>
