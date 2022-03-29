<template>
  <div v-for="i in berries" v-bind:key="i.name" class="p-10">
    <!--Card 1-->
    <div
      class="
        max-w-sm
        rounded
        overflow-hidden
        shadow-lg
        transition
        ease-in-out
        delay-150
        bg-gray-800
        hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600
        duration-300
      "
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <router-link
            data-testid="link"
            class="text-white hover:text-white"
            v-bind:to="'/barries/' + i.name"
            >{{ i.name.toUpperCase() }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Berry } from '../types/exercise'
interface Props {
  berries: Berry[]
}
const { berries } = defineProps<Props>()
</script>