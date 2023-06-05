<template>
  <header aria-label="Page Header" class="bg-[#e9e7e7]">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex items-center sm:justify-between sm:gap-4">
        <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">
          <div class="flex gap-4">
            <button
              type="button"
              class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
            >
              <span class="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Eric!</h1>

        <p class="mt-1.5 text-sm text-gray-500">
          Never miss a beat with your orders and get real-time updates on your deliveries 🚚
        </p>
      </div>
    </div>
  </header>

  <!-- Progress -->
  <div class="mt-8 max-w-3xl" style="margin-left: auto; margin-right: auto">
    <h2 class="sr-only">Steps</h2>

    <div>
      <!-- The blue bar at the top -->
      <div class="overflow-hidden rounded-full bg-gray-200">
        <div class="h-2 w-1/2 rounded-full bg-blue-500"></div>
      </div>

      <!-- The position and the icon next to it -->
      <ol class="mt-4 grid grid-cols-5 text-sm font-medium text-gray-500">
        <li class="flex items-center justify-start text-blue-600 sm:gap-1.5">
          <span class="hidden sm:inline"> Takahashi Fisheries </span>

          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M275.2 38.4c-10.6-8-25-8.5-36.3-1.5S222 57.3 224.6 70.3l9.7 48.6c-19.4 9-36.9 19.9-52.4 31.5c-15.3 11.5-29 23.9-40.7 36.3L48.1 132.4c-12.5-7.3-28.4-5.3-38.7 4.9S-3 163.3 4.2 175.9L50 256 4.2 336.1c-7.2 12.6-5 28.4 5.3 38.6s26.1 12.2 38.7 4.9l93.1-54.3c11.8 12.3 25.4 24.8 40.7 36.3c15.5 11.6 33 22.5 52.4 31.5l-9.7 48.6c-2.6 13 3.1 26.3 14.3 33.3s25.6 6.5 36.3-1.5l77.6-58.2c54.9-4 101.5-27 137.2-53.8c39.2-29.4 67.2-64.7 81.6-89.5c5.8-9.9 5.8-22.2 0-32.1c-14.4-24.8-42.5-60.1-81.6-89.5c-35.8-26.8-82.3-49.8-137.2-53.8L275.2 38.4zM384 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              style="fill: rgb(37, 99, 235)"
            />
          </svg>
        </li>
        <li class="flex items-center justify-start text-blue-600 sm:gap-1.5">
          <span class="hidden sm:inline"> Sushi Master Co. </span>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 32C28.7 32 0 60.7 0 96s28.7 64 64 64h1c3.7 88.9 77 160 167 160h56V128H264 88.8 64c-17.7 0-32-14.3-32-32s14.3-32 32-32H464c8.8 0 16-7.2 16-16s-7.2-16-16-16H64zM224 456c0 13.3 10.7 24 24 24h72V407.8l-64.1-22.4c-12.5-4.4-26.2 2.2-30.6 14.7s2.2 26.2 14.7 30.6l4.5 1.6C233 433.9 224 443.9 224 456zm128 23.3c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3v69.9zM472.6 415c24.6-30.3 39.4-68.9 39.4-111c0-12.3-1.3-24.3-3.7-35.9L382.8 355.1c.8 3.4 1.2 7 1.2 10.6c0 4.6-.7 9-1.9 13.1L472.6 415zM336 128H320V320h18.3c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128zM168 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
              style="fill: rgb(37, 99, 235)"
            />
          </svg>
        </li>
        <li class="flex items-center justify-start text-blue-600 sm:gap-1.5">
          <span class="hidden sm:inline"> Global Seafood </span>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="20" width="20">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V232.2c-39.1 32.3-64 81.1-64 135.8c0 49.5 20.4 94.2 53.3 126.2C364.5 505.1 351.1 512 336 512H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm112-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H272zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zm96 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm140.7-67.3c-6.2 6.2-6.2 16.4 0 22.6L521.4 352H432c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4l-28.7 28.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56-56c6.2-6.2 6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0z"
              style="fill: rgb(37, 99, 235)"
            />
          </svg>
        </li>

        <li class="flex items-center justify-center sm:gap-1.5">
          <span class="hidden sm:inline"> Zen Sushi Bar </span>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="25" width="25">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"
              style="fill: rgb(107, 114, 128)"
            />
          </svg>
        </li>

        <li class="flex items-center justify-end sm:gap-1.5">
          <span class="hidden sm:inline"> QuickDelivery Inc. </span>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="20" width="20">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              style="fill: rgb(107, 114, 128)"
            />
          </svg>
        </li>
      </ol>
    </div>
  </div>

  <!-- Journey -->
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid max-w-2xl mx-auto">
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 opacity-0 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full"
            >
              1
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <img src="@/assets/images/track/fisheries.svg" class="rounded-full" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between space-x-4">
              <p class="text-xl font-semibold sm:text-base">Takahashi Fisheries</p>
              <div>
                <span class="text-gray-600 text-xs whitespace-nowrap mr-4">
                  <font-awesome-icon :icon="['fa', 'clock']" />
                  2 days ago</span
                >
                <span class="text-gray-600 text-xs whitespace-nowrap">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  Hokkaido, Japan</span
                >
              </div>
            </div>

            <p class="text-sm text-gray-700">
              Takahashi Fisheries cultivates and harvests fresh fish, including the key ingredients
              for sushi, such as tuna and salmon.
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full"
            >
              2
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <img src="@/assets/images/track/sushi-master.webp" class="rounded-full" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between space-x-4">
              <p class="text-xl font-semibold sm:text-base">Sushi Master Co.</p>
              <div>
                <span class="text-gray-600 text-xs whitespace-nowrap mr-4">
                  <font-awesome-icon :icon="['fa', 'clock']" />
                  2 days ago</span
                >
                <span class="text-gray-600 text-xs whitespace-nowrap">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  Tokyo, Japan</span
                >
              </div>
            </div>
            <p class="text-sm text-gray-700">
              Sushi Master Co. specializes in processing and preparing sushi-grade fish. They
              receive the fish from various suppliers, perform quality checks, and ensure proper
              handling and packaging for delivery.
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full"
            >
              3
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <img src="@/assets/images/track/distribution.svg" class="rounded-full" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between space-x-4">
              <p class="text-xl font-semibold sm:text-base">Global Seafood Distribution</p>
              <div>
                <span class="text-gray-600 text-xs whitespace-nowrap mr-4">
                  <font-awesome-icon :icon="['fa', 'clock']" />
                  Yesterday</span
                >
                <span class="text-gray-600 text-xs whitespace-nowrap">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  Osaka, Japan</span
                >
              </div>
            </div>
            <p class="text-sm text-gray-700">
              Global Seafood Distribution acts as a wholesaler, procuring sushi-grade fish from
              different processing facilities and supplying it to various restaurants and retailers.
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full"
            >
              4
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24 overflow-hidden"
            >
              <img src="@/assets/images/track/bar.webp" class="rounded-full" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between space-x-4">
              <p class="text-xl font-semibold sm:text-base">Zen Sushi Bar</p>
              <div>
                <span class="text-gray-600 text-xs whitespace-nowrap mr-4">
                  <font-awesome-icon :icon="['fa', 'clock']" />
                  Yesterday</span
                >
                <span class="text-gray-600 text-xs whitespace-nowrap">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  New York City, USA</span
                >
              </div>
            </div>
            <p class="text-sm text-gray-700">
              Zen Sushi Bar is a popular restaurant in NYC known for its authentic Japanese cuisine.
              They receive regular deliveries of fresh sushi ingredients from their trusted seafood
              distributor.
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full"
            >
              5
            </div>
          </div>
          <div class="w-px h-full opacity-0"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <img src="@/assets/images/track/travel.svg" class="rounded-full" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between space-x-4">
              <p class="text-xl font-semibold sm:text-base">QuickDelivery Inc.</p>
              <div>
                <span class="text-gray-600 text-xs whitespace-nowrap mr-4">
                  <font-awesome-icon :icon="['fa', 'clock']" />
                  Today</span
                >
                <span class="text-gray-600 text-xs whitespace-nowrap">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  New York City, USA</span
                >
              </div>
            </div>
            <p class="text-sm text-gray-700">
              QuickDelivery Inc. is a local food delivery service that specializes in transporting
              perishable items. They handle the transportation of the sushi ingredients from the
              distributor to the restaurant, ensuring timely and safe delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Interactive Map -->
  <div class="max-w-4xl -mt-8" style="margin-left: auto; margin-right: auto">
    <h1 class="text-md font-bold text-gray-900 sm:text-3xl mb-3 ml-8">Track Your Meal's Route</h1>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d5838255.480668327!2d132.39107056992086!3d38.68818446904488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x5f9f59209f6c888b%3A0x1c3cc3564fce038f!2sHokkaido%2C%20Japan!3m2!1d43.2203266!2d142.8634737!4m5!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!3m2!1d35.6761919!2d139.65031059999998!4m5!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!3m2!1d34.6937249!2d135.5022535!4m5!1s0x355a9908eef34fbb%3A0x7e4ce50cfc1f772!2sHiroshima%2C%20Japan!3m2!1d34.3852894!2d132.45530549999998!5e1!3m2!1sen!2sin!4v1685854777957!5m2!1sen!2sin"
      width="100%"
      height="400px"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      style="
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      "
      class="rounded-lg mt-9"
    ></iframe>
  </div>

  <!-- Estimated Delivery-->
  <div class="flex justify-center mt-16 mb-8">
    <section class="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 max-w-3xl">
      <img src="@/assets/images/track/salmon.webp" class="h-32 w-full object-cover md:h-full" />

      <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p class="text-sm font-semibold uppercase tracking-widest">Delivery expected by</p>

        <h2 class="mt-6 font-black uppercase">
          <span class="text-4xl font-black sm:text-5xl lg:text-6xl"> 21<sup>st</sup> May </span>

          <span class="mt-2 block text-sm">Delivery Status: Shipped</span>
        </h2>

        <a
          class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white hover:cursor-pointer"
        >
          Get Order Updates
        </a>

        <p class="mt-8 text-xs font-medium uppercase text-gray-400">
          Tracking Id: {{ trackingId }}
        </p>
      </div>
    </section>
  </div>

  <!-- Quality checks -->
  <div class="max-w-4xl px-4 pt-10" style="margin-left: auto; margin-right: auto">
    <h1 class="text-md font-bold text-gray-900 sm:text-3xl mb-5 ml-3">
      Quality checks and inspections
    </h1>
    <div class="w-full rounded-2xl bg-white p-2">
      <Disclosure as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
        >
          <span>What were the testing results?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-red-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="mt-1">
            <span
              class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 mr-2 py-0.5 text-emerald-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-1 mr-1.5 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p class="whitespace-nowrap text-sm">Sushi Roll; SR20230525; May 25, 2023</p>
            </span>
            <span class="leading-4">
              <ul class="ml-5 list-disc">
                <li class="my-2">
                  Appearance
                  <ul class="list-disc ml-5">
                    <li>Color: Fresh and vibrant</li>
                    <li>Shape: Uniform and well-formed</li>
                    <li>Texture: Firm and cohesive</li>
                  </ul>
                </li>
                <li class="my-2">
                  Taste
                  <ul class="list-disc ml-5">
                    <li>Flavor: Well-balanced and authentic</li>
                    <li>Rice: Properly seasoned and sticky</li>
                    <li>Fish/Seafood: Fresh, tender, and free from any off-flavors</li>
                    <li>Nori (Seaweed): Crispy and flavorful</li>
                  </ul>
                </li>
                <li class="my-2">
                  Hygiene and Safety
                  <ul class="list-disc ml-5">
                    <li>Cleanliness: No visible signs of dirt or foreign particles</li>
                    <li>Handling: Proper handling and storage practices followed</li>
                    <li>Freshness: Ingredients appear fresh and refrigeration maintained</li>
                  </ul>
                </li>
                <li class="my-2">
                  Allergens
                  <ul class="list-disc ml-5">
                    <li>Allergen Declaration: Proper labeling of allergenic ingredients</li>
                    <li>Cross-Contamination: No evidence of cross-contamination with allergens</li>
                  </ul>
                </li>
                <li class="my-2">
                  Nutritional Analysis
                  <ul class="list-disc ml-5">
                    <li>Macronutrients: Within expected range (carbohydrates, proteins, fats)</li>
                    <li>Calories: Calculated calorie count per serving</li>
                  </ul>
                </li>
                <li class="my-2">
                  Packaging
                  <ul class="list-disc ml-5">
                    <li>Integrity: Packaging intact without any leaks or damage</li>
                    <li>
                      Labeling: Accurate product information, including ingredients and expiry date
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </div>
          <div class="mt-3">
            <span
              class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 mr-2 py-0.5 text-emerald-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-1 mr-1.5 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p class="whitespace-nowrap text-sm">Summary of Testing</p>
            </span>
            <span class="leading-4"
              >The sushi roll from Batch SR20230525 has successfully passed all quality checks and
              testing parameters. It exhibits excellent appearance, taste, hygiene, safety, allergen
              handling, and meets nutritional requirements. The packaging is secure and properly
              labeled.
            </span>
          </div>
          <div class="mt-3">
            <span
              class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 mr-2 py-0.5 text-emerald-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-1 mr-1.5 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p class="whitespace-nowrap text-sm">Recommendation</p>
            </span>
            <span class="leading-4"
              >The sushi roll from Batch SR20230525 meets the defined quality standards and can be
              approved for distribution and sale.
            </span>
          </div>
        </DisclosurePanel> </Disclosure
      ><Disclosure class="mt-2" as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
        >
          <span>How is transportation handled?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-red-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          Transportation of sushi follows best practices to ensure freshness, quality, and safety.
          Specialized packaging materials maintain optimal temperature. Sushi is sealed to prevent
          contamination and packaged securely. Careful handling and stacking minimize damage.
          Efficient logistics reduce transit time. Regular quality checks are conducted. These
          practices guarantee fresh, flavorful, and hygienic sushi upon arrival.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure class="mt-2" as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
        >
          <span>How do we store dry goods?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-red-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          Sushi is stored following strict guidelines to maintain freshness and quality. Proper
          refrigeration and temperature control are implemented. Hygienic storage containers are
          used to prevent cross-contamination. Regular checks ensure compliance with storage
          standards, preserving the taste and texture of the sushi.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure class="mt-2" as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
        >
          <span>Tell me about the production process.</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-red-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          Sushi undergoes a series of meticulous processes to ensure its exquisite taste and
          presentation. First, fresh ingredients such as seafood, rice, and nori are carefully
          selected. The rice is seasoned with a delicate balance of vinegar, sugar, and salt. Expert
          sushi chefs skillfully shape the sushi, crafting rolls, nigiri, and sashimi with
          precision. The sushi is then meticulously garnished with wasabi, ginger, and soy sauce for
          enhanced flavor. Quality checks are conducted to ensure the sushi meets strict standards
          for appearance, taste, and hygiene. Finally, the sushi is artfully arranged on serving
          platters, ready to be savored by sushi enthusiasts, showcasing the artistry and dedication
          behind each delectable piece.
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>

  <!-- About the farmer -->
  <div class="mt-12" style="display: flex; justify-content: center">
    <div>
      <h1 class="text-md font-bold text-gray-900 sm:text-3xl mb-5 ml-3">Meet the producer</h1>
      <div class="card max-w-xl glass">
        <figure><img src="@/assets/images/track/farmer/4.jpg" /></figure>
        <div class="card-body">
          <h2 class="card-title">Hiroshi Tanaka</h2>
          <p>
            Hiroshi Tanaka, the masterful sushi producer, effortlessly blends tradition and
            innovation, crafting mouthwatering rolls that tantalize the taste buds.
          </p>
          <div class="card-actions justify-end">
            <label for="my-modal" class="btn btn-primary">More info</label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for info -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Biography</h3>
      <p class="py-4">
        Hiroshi Tanaka is a renowned sushi producer, celebrated for his exceptional craftsmanship
        and unwavering passion for the art of sushi making. With decades of experience and a deep
        understanding of Japanese culinary traditions, Tanaka has become a revered figure in the
        world of sushi.
      </p>
      <h3 class="mt-3 font-bold text-lg">Background and Training</h3>
      <p class="py-4">
        Hiroshi Tanaka's journey in the culinary world began at a young age, where he developed an
        affinity for the delicate artistry of sushi. Growing up in a traditional Japanese family, he
        learned the foundational techniques and principles of sushi making from his parents, who
        themselves were sushi chefs. To further refine his skills, Tanaka embarked on a rigorous
        apprenticeship at a prestigious sushi restaurant in Tokyo. Under the guidance of a master
        sushi chef, he honed his knife skills, perfected the art of rice preparation, and studied
        the nuances of selecting the freshest ingredients. Through years of dedicated practice and
        unwavering dedication, he emerged as a true sushi virtuoso.
      </p>
      <h3 class="mt-3 font-bold text-lg">Farming Practices</h3>
      <p class="py-4">
        Hiroshi Tanaka is committed to sustainable farming practices, ensuring the highest quality
        ingredients for his sushi creations. He sources seafood from well-managed fisheries that
        prioritize conservation and avoid overfishing. Tanaka also emphasizes the use of organic and
        locally sourced produce, supporting farmers who employ sustainable farming methods and
        minimizing the carbon footprint associated with transportation. In addition, he carefully
        selects farmed seafood from operations that prioritize responsible aquaculture practices,
        including responsible feed sourcing and minimizing environmental impact. Tanaka's dedication
        to sustainable farming not only ensures the freshest and finest ingredients but also
        contributes to the long-term health of our ecosystems.
      </p>
      <h3 class="mt-3 font-bold text-lg">Innovation and Signature Style</h3>
      <p class="py-4">
        While deeply rooted in tradition, Hiroshi Tanaka is known for his innovative approach to
        sushi. He seamlessly blends classic techniques with contemporary flavors and ingredients,
        resulting in a harmonious fusion of tradition and innovation. His inventive creations push
        the boundaries of sushi, delighting customers with unexpected flavor combinations and
        visually stunning presentations. From meticulously hand-rolled maki to exquisite nigiri and
        sashimi, Tanaka's creations are a testament to his artistry and attention to detail. He
        believes that every bite should be a symphony of flavors, textures, and visual appeal, and
        his dishes reflect his unwavering commitment to culinary excellence.
      </p>
      <h3 class="mt-3 font-bold text-lg">Awards and Recognition</h3>
      <p class="py-4">
        Hiroshi Tanaka's exceptional talent and contributions to the world of sushi have not gone
        unnoticed. He has received numerous accolades and prestigious awards throughout his career.
        Tanaka's dedication to preserving the authenticity of Japanese cuisine while pushing its
        boundaries has earned him a dedicated following of sushi enthusiasts from around the globe.
      </p>
      <h3 class="mt-3 font-bold text-lg">Visiting Hiroshi Tanaka's Sushi Restaurant</h3>
      <p class="py-4">
        To experience the culinary masterpieces of Hiroshi Tanaka, patrons can visit his eponymous
        sushi restaurant, located in the heart of Tokyo. The intimate and inviting ambiance,
        combined with impeccable service, creates a memorable dining experience for every guest.
        Reservations are highly recommended due to the restaurant's popularity. Whether you're a
        connoisseur of sushi or a curious food lover seeking an extraordinary gastronomic adventure,
        Hiroshi Tanaka's restaurant promises to transport you on a remarkable culinary journey that
        celebrates the art and essence of sushi.
      </p>

      <div class="modal-action">
        <label for="my-modal" class="btn">Okay, Got It</label>
      </div>
    </div>
  </div>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

export default {
  name: 'TrackingInfo',
  props: ['trackingId'],
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon
  }
}
</script>
