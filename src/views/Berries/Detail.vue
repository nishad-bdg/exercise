<template>
  <div class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <BerriesDetails v-else :detailData="detailData" />
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BerryDetail } from '../../types/exercise'
import Loader from '../../components/Loader.vue'
import BerriesDetails from '../../components/BerriesDetails.vue'
import snackbar from '../../helpers/snackbar'

const props = defineProps({
  name: {
    type: String,
  },
})

const loading = ref<boolean>(false)
const apiUrl = ref<string>(`https://pokeapi.co/api/v2/berry/${props.name}`)
const detailData = ref<BerryDetail>()

onMounted(async () => {
  loading.value = true
  try {
    const response = await fetch(apiUrl.value)
    const data = await response.json()
    detailData.value = data
    snackbar('API data fetched Successfully','top-right','success')
  } catch (error) {
    snackbar(error)
  }
  loading.value = false
})
</script>
