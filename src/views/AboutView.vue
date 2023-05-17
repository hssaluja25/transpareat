<template>
  <nav-bar></nav-bar>

  <main>
    <!-- Hero image in the bg -->
    <div class="hero min-h-screen" style="background-image: url(@/assets/images/about/chef.webp)">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-4xl">
          <h1 class="mb-9 text-5xl font-bold">Trace Your Food from Farm to Table</h1>
          <p class="bg-opacity-50 text-2xl mb-5">
            Welcome to our food traceability web app! We believe that everyone deserves to know
            where their food comes from and how it's produced. With our app, you can trace your food
            products from the farm to your table, and feel confident in the quality and
            sustainability of the food you're eating. Our app uses blockchain technology to provide
            a secure and transparent ledger of every transaction made in the food supply chain. This
            means that you can track your food products with confidence, and know that the
            information you're seeing is accurate and up-to-date. So why wait? Start tracing your
            food today and join us in our mission to create a more sustainable and transparent food
            system.
          </p>
          <button class="btn btn-primary">
            <router-link :to="{ name: 'home' }"> Get Started</router-link>
          </button>
        </div>
      </div>
    </div>

    <!-- Section with image to the right and content to the left-->
    <section>
      <div
        class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center"
      >
        <!-- Content to the left -->
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-2xl font-semibold tracking-wide text-gray-800 lg:text-2xl ml-12">
              Transpareat provides end-to-end traceability of food products by leveraging blockchain
              technology
            </h1>

            <div class="mt-8 space-y-5">
              <p class="flex items-center -mx-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 ml-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="ml-2">End-to-end traceability</span>
              </p>
              <p class="flex items-center -mx-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 ml-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="ml-2">Real-time tracking</span>
              </p>
              <p class="flex items-center -mx-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 ml-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="ml-2">Smart Contracts</span>
              </p>
            </div>
          </div>

          <div
            class="ml-12 w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40"
          >
            <form class="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <!-- Image to the right -->
        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="@/assets/images/about/image-to-the-right.webp"
            alt="traceability"
          />
        </div>
      </div>
    </section>

    <!-- Features -->
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse -ml-12">
        <div>
          <h1 class="ml-5 text-5xl font-bold">Revolutionizing the Food Supply Chain</h1>
          <p class="py-6 ml-5">
            With Transpareat, consumers can have peace of mind knowing that they are consuming safe
            and high-quality food products that have been responsibly sourced and handled throughout
            the entire supply chain.
          </p>
          <button class="ml-5 btn btn-primary">
            <router-link :to="{ name: 'home' }"> Take a Look</router-link>
          </button>
        </div>
        <img
          src="@/assets/images/about/features.webp"
          class="max-w-2xl rounded-lg shadow-2xl mr-5"
        />
      </div>
    </div>

    <!-- Compliance -->
    <header class="text-center mb-5">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Compliance</h2>

      <p class="max-w-4xl text-xl mx-auto mt-4 text-gray-500">
        Ensuring compliance is a critical component of our platform. Transpareat adheres to the
        highest standards of data privacy and security, as well as compliance with regulations and
        industry standards in the food supply chain.
      </p>
    </header>
    <div class="text-gray-900">
      <div class="container grid grid-cols-12 mx-auto">
        <!-- Left compliance data -->
        <div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
          <div class="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 class="text-3xl font-bold">FSMA (Food Safety Modernization Act)</h1>
            <p>
              This act requires food facilities to have preventive controls in place to minimize the
              risk of foodborne illness. Transpareat ensures that all food products are tracked and
              monitored to prevent food safety incidents.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-sm text-violet-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 class="text-3xl font-bold">FDA Food Code</h1>
            <p>
              This code sets the standards for food safety and sanitation in food establishments in
              the United States. Transpareat ensures that all food products are tracked and
              monitored in compliance with the FDA Food Code.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-sm text-violet-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 class="text-3xl font-bold">Fair Packaging and Labeling Act</h1>
            <p>
              This act requires that all consumer products have accurate and informative labeling.
              Transpareat ensures that all food products are properly labeled with information such
              as ingredients, allergens, and nutritional information.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-sm text-violet-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Compliance Data -->
        <div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
          <div class="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 class="text-3xl font-bold">GDPR (General Data Protection Regulation)</h1>
            <p>
              This regulation governs the collection, use, and storage of personal data of EU
              citizens. Transpareat ensures that user data is collected and used in compliance with
              GDPR.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-sm text-violet-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 class="text-3xl font-bold">HACCP (Hazard Analysis and Critical Control Points)</h1>
            <p>
              This standard outlines the steps necessary to identify and control potential hazards
              in the food production process. Transpareat ensures that food products are traceable
              throughout the entire supply chain, from farm to table.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-sm text-violet-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 class="text-3xl font-bold">ISO 22000 (Food Safety Management System)</h1>
            <p>
              This standard outlines the requirements for a food safety management system that
              ensures the safety of food products. Your app should ensure that all food products are
              tracked and monitored in compliance with ISO 22000.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-sm text-violet-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <app-footer></app-footer>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'AboutView',
  components: {
    NavBar,
    AppFooter
  }
}
</script>
