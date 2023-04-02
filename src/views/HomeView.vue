<template>
  <nav-bar></nav-bar>
  <main>
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
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

          <div class="lg:col-span-2 lg:py-8">
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
                v-for="seafood in seafoods"
                :key="seafood"
                style="flex: 0 0 auto; width: calc(100% / 2 - 2rem); margin-right: 2rem"
              >
                <a href="#" class="block group">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                    alt=""
                    class="object-cover w-full rounded aspect-square"
                  />

                  <div class="mt-3">
                    <h3
                      class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                      Salmon
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">$12</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Meat and Poultry</h2>

          <p class="max-w-xl mx-auto mt-4 text-gray-500">
            Our farmers ensure that animals are raised in humane conditions, that they receive
            appropriate veterinary care, and that they are not treated with antibiotics or other
            drugs that can harm human health. We also track the environmental impact of meat and
            poultry production, such as greenhouse gas emissions or water use.
          </p>
        </header>

        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

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
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

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
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                  class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

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
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

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
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                  class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

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
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

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
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

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
    </section>

    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
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

          <div class="lg:col-span-2 lg:py-8">
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
                v-for="seafood in seafoods"
                :key="seafood"
                style="flex: 0 0 auto; width: calc(100% / 2 - 2rem); margin-right: 2rem"
              >
                <a href="#" class="block group">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                    alt=""
                    class="object-cover w-full rounded aspect-square"
                  />

                  <div class="mt-3">
                    <h3
                      class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                      Salmon
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">$12</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Meat and Poultry</h2>

          <p class="max-w-xl mx-auto mt-4 text-gray-500">
            Our farmers ensure that animals are raised in humane conditions, that they receive
            appropriate veterinary care, and that they are not treated with antibiotics or other
            drugs that can harm human health. We also track the environmental impact of meat and
            poultry production, such as greenhouse gas emissions or water use.
          </p>
        </header>

        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

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
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

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
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                  class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

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
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

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
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                  class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

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
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

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
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

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
    </section>
  </main>
  <app-footer></app-footer>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      seafoods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  // created: {
  // Here get the contents from Firestore. No need to cache. Because this is just for demonstration
  // },
  components: {
    NavBar,
    AppFooter
  }
}
</script>
