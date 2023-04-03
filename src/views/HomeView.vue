<template>
  <nav-bar></nav-bar>
  <main>
    <!-- Seafood -->
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <!-- The Header section to the left -->
            <div class="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Seafood</h2>

                <p class="mt-4 text-gray-500">
                  Seafood is often associated with concerns about sustainability, food safety, and
                  fraud. Traceability can help ensure that seafood is harvested or farmed in a
                  sustainable manner, and that it is free from contaminants such as mercury or
                  harmful bacteria. It can also help prevent mislabeling or misrepresentation of
                  seafood species, which can impact both consumer health and conservation efforts.
                </p>
              </header>

              <a
                href="#"
                class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                Explore
              </a>
            </div>
          </div>

          <!-- To display products -->
          <div v-if="seafood" class="lg:col-span-2 lg:py-8">
            <ul
              class="gap-4"
              style="
                display: flex;
                overflow-x: auto;
                padding: 0;
                margin: 0;
                list-style: none;
                scrollbar-width: none;
              "
            >
              <li
                v-for="sf in seafood"
                :key="sf"
                style="flex: 0 0 auto; width: calc(100% / 2 - 2rem); margin-right: 2rem"
              >
                <a href="#" class="block group">
                  <img :src="sf['img']" alt="" class="object-cover w-full rounded aspect-square" />

                  <div class="mt-3">
                    <h3
                      class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                      {{ sf['name'] }}
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">
                      ${{ sf['price'] }} - {{ sf['quantity'] }}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Organic -->
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Organic Products</h2>

          <p class="max-w-xl mx-auto mt-4 text-gray-500">
            Organic products are often associated with concerns about fraud or misrepresentation.
            With us, you can be sure that there is no mislabeling or misrepresentation of organic
            products. Traceability can help ensure that the organic products are grown or produced
            according to organic standards, and that they are not contaminated with synthetic
            pesticides or fertilizers.
          </p>
        </header>

        <div v-if="organic">
          <ul
            v-for="time in [0, 3, 6]"
            :key="time"
            class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3"
          >
            <li>
              <a href="#" class="relative block group">
                <img
                  :src="organic[time]['img']"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">{{ organic[time]['name'] }}</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="relative block group">
                <img
                  :src="organic[time + 1]['img']"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">{{ organic[time + 1]['name'] }}</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="relative block group">
                <img
                  :src="organic[time + 2]['img']"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">{{ organic[time + 2]['name'] }}</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Meat and Poultry -->
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div class="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Meat and Poultry</h2>

                <p class="mt-4 text-gray-500">
                  Our farmers ensure that animals are raised in humane conditions, that they receive
                  appropriate veterinary care, and that they are not treated with antibiotics or
                  other drugs that can harm human health. We also track the environmental impact of
                  meat and poultry production, such as greenhouse gas emissions or water use.
                </p>
              </header>

              <a
                href="#"
                class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                Explore
              </a>
            </div>
          </div>

          <div v-if="meat" class="lg:col-span-2 lg:py-8">
            <ul
              class="gap-4"
              style="
                display: flex;
                overflow-x: auto;
                padding: 0;
                margin: 0;
                list-style: none;
                scrollbar-width: none;
              "
            >
              <li
                v-for="product in meat"
                :key="product"
                style="flex: 0 0 auto; width: calc(100% / 2 - 2rem); margin-right: 2rem"
              >
                <a href="#" class="block group">
                  <img
                    :src="product['img']"
                    alt=""
                    class="object-cover w-full rounded aspect-square"
                  />

                  <div class="mt-3">
                    <h3
                      class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                      {{ product['name'] }}
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">
                      ${{ product['price'] }} - {{ product['quantity'] }}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Dairy -->
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Dairy Products</h2>

          <p class="max-w-xl mx-auto mt-4 text-gray-500">
            Transpareat is dedicated to providing our customers with access to high-quality and
            traceable dairy products. We understand that consumers are increasingly concerned about
            the quality and safety of the food they consume, and we believe that transparency and
            traceability are essential in building trust between producers and consumers. Our dairy
            products section features a wide range of products, including milk, cheese, yogurt, and
            butter, all of which are sourced from trusted farms and producers that adhere to strict
            quality and safety standards.
          </p>
        </header>

        <div v-if="dairy">
          <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <a href="#" class="relative block group">
                <img
                  :src="dairy[0]['img']"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">{{ dairy[0]['name'] }}</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="relative block group">
                <img
                  :src="dairy[1]['img']"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">{{ dairy[1]['name'] }}</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="relative block group">
                <img
                  :src="dairy[2]['img']"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white">{{ dairy[2]['name'] }}</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  <app-footer></app-footer>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { mapState } from 'pinia'
import useFeaturedStore from '@/stores/featured.js'

export default {
  name: 'HomeView',
  computed: {
    ...mapState(useFeaturedStore, ['seafood', 'meat', 'organic', 'dairy'])
  },
  components: {
    NavBar,
    AppFooter
  }
}
</script>
