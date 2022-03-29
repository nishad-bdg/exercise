<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900" data-testid="name">
        {{ detailData?.name.toUpperCase() }}
      </h3>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Id</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="id">
            {{ detailData?.id }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="title">
            {{ detailData?.name }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Growth Time</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="growthTime"> 
            {{ detailData?.growth_time }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Max Harvest</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="maxHarvest">
            {{ detailData?.max_harvest }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Natural Gift Power</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="naturalGiftPower">
            {{ detailData?.natural_gift_power }}
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Size</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="size">
            {{ detailData?.size }}
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Smoothness</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="smoothness">
            {{ detailData?.smoothness }}
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Soil Dryness</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="soilDryness">
            {{ detailData?.soil_dryness }}
          </dd>
        </div>

        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Flavor</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul
              role="list"
              class="border border-gray-200 rounded-md divide-y divide-gray-200"
              data-testid="flavor"
            >
              <li
                v-for="item in detailData?.flavors"
                v-bind:key="item.flavor.name"
                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
              >
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: solid/paper-clip -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate" data-testid="flavorName">
                    {{ item.flavor.name.toUpperCase() }}
                  </span>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BerryDetail } from '../types/exercise'
interface Props {
  detailData?: BerryDetail
}
const { detailData } = defineProps<Props>()
</script>