<!-- This is used in the track route to select the item to track -->
<template>
  <div v-if="cartNotEmpty">
    <div class="mt-9 mb-9 flex justify-center">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Enter tracking id</span>
        </label>
        <label class="input-group hover:cursor-pointer">
          <input type="text" placeholder="#TRSPRT-23981-2023" class="input input-bordered" />
          <span class="hover:bg-neutral-focus hover:text-white">Go</span>
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
          >
            <img
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                <p class="mt-1 text-xs text-gray-700">Blue</p>
              </div>
            </div>
          </div>
          <!-- Card2 -->
          <div
            class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start hover:cursor-pointer hover:shadow-xl transition"
          >
            <img
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                <p class="mt-1 text-xs text-gray-700">Blue</p>
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
</template>

<script>
export default {
  name: 'SelectItem',
  data() {
    return {
      cartNotEmpty: true
    }
  },
  methods: {
    goPressed() {
      this.$emit('')
    }
  }
}
</script>
