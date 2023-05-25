<!-- This is used in the track route to select the item to track -->
<template>
  <div v-if="loggedIn">
    <div v-if="cartNotEmpty">
      <div class="mt-9 mb-9 flex justify-center">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Enter tracking id</span>
          </label>
          <label class="input-group hover:cursor-pointer">
            <input type="text" placeholder="#TRSPRT-23981-2023" class="input input-bordered" />
            <span
              class="hover:bg-neutral-focus hover:text-white"
              @click="itemSelected('TRSPRT-0001-2023')"
              >Go</span
            >
          </label>
        </div>
      </div>
      <div class="divider">OR</div>
      <!-- Products to track -->
      <div class="mt-9">
        <h1 class="mb-10 text-center text-2xl font-bold">Select an item to track</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            <!-- Card1 -->
            <div
              class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start hover:cursor-pointer hover:shadow-2xl transition"
              @click="itemSelected('TRSPRT-0001-2023')"
            >
              <img
                src="@/assets/images/track/salmon.webp"
                alt="product-image"
                class="w-full rounded-lg sm:w-40"
              />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">Salmon</h2>
                  <p class="mt-1 text-xs text-gray-700">Ordered 19th May</p>
                </div>
              </div>
            </div>
            <!-- Card2 -->
            <div
              class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start hover:cursor-pointer hover:shadow-xl transition"
              @click="itemSelected('TRSPRT-0002-2023')"
            >
              <img
                src="@/assets/images/track/sushi.webp"
                alt="product-image"
                class="w-full rounded-lg sm:w-40"
              />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">Sushi</h2>
                  <p class="mt-1 text-xs text-gray-700">Ordered 19th May</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="max-w-3xl mt-5 mx-auto text-center">
        <h2 class="text-3xl font-extrabold sm:text-4xl">
          Looks like you haven't made any purchases yet. Get started by adding items to your cart!
        </h2>
      </div>
      <div class="flex justify-center">
        <img src="@/assets/images/track/empty-cart.png" class="h-2/5 w-2/5" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="max-w-3xl mt-5 mx-auto text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        To view and track your ordered items, please log in or create an account.
      </h2>
    </div>
    <div class="flex justify-center">
      <img src="@/assets/images/track/thiss.jpg" class="h-2/5 w-2/5 mt-2" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useUserStore from '@/stores/user.js'

export default {
  name: 'SelectItem',
  data() {
    return {
      cartNotEmpty: true
    }
  },
  computed: {
    ...mapState(useUserStore, ['loggedIn'])
  },
  emits: ['item-selected'],
  methods: {
    itemSelected(trackingId) {
      this.$emit('item-selected', trackingId)
    }
  }
}
</script>
