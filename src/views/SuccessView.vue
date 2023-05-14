<template>
  <div class="relative w-full h-full">
    <div class="absolute hidden w-full bg-gray-50 lg:block h-96"></div>
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)" width="52" height="24"></rect>
            </svg>
            <span class="relative">Success</span>
          </span>
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Thank you for your purchase! We appreciate your business and hope you enjoy your culinary
          delight.
        </p>
      </div>

      <!-- The 2 cards below -->
      <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
        <div>
          <div class="p-8 bg-gray-900 rounded">
            <div class="mb-4 text-center">
              <p class="text-xl font-medium tracking-wide text-white">Order details</p>
              <div class="flex items-center justify-center">
                <p class="mr-2 text-3xl font-semibold text-white lg:text-6xl">
                  {{ $route.query.name }}
                </p>
                <p class="text-lg text-gray-500"></p>
              </div>
            </div>
            <ul class="mb-8 space-y-2">
              <li class="flex items-center">
                <div class="mr-3">
                  <svg
                    class="w-4 h-4 text-teal-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                    <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-300">Order ID: #TRSPRT-23981-2023</p>
              </li>
              <li class="flex items-center">
                <div class="mr-3">
                  <svg
                    class="w-4 h-4 text-teal-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                    <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-300">Purchase date: 25/03/2023</p>
              </li>
              <li class="flex items-center">
                <div class="mr-3">
                  <svg
                    class="w-4 h-4 text-teal-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                    <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-300">Expected delivery date: 27/03/2023</p>
              </li>
            </ul>
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <router-link :to="{ name: 'home' }"> Back to Home Page</router-link>
            </button>
          </div>
          <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75"></div>
          <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50"></div>
          <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25"></div>
        </div>

        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            :style="{ backgroundImage: 'url(' + $route.query.img + ')' }"
          ></div>

          <div
            class="mb-5 w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
          >
            <h3
              class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
            >
              {{ $route.query.name }}
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200"
                >${{ $route.query.price }}</span
              >
              <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              >
                <router-link :to="{ name: 'track' }"> Track</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useUserStore from '@/stores/user.js'
import useHasCompletedTransactionStore from '@/stores/hasCompletedTransaction.js'

export default {
  name: 'SuccessView',
  beforeRouteEnter(to, from, next) {
    const userStore = useUserStore()
    const transactionStore = useHasCompletedTransactionStore()
    if (userStore.loggedIn && transactionStore.completed) {
      next()
    } else {
      next({ name: 'home' })
    }
  }
}
</script>
