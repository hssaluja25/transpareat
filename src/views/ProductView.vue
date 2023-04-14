<template>
  <section v-if="img != null">
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <!-- Images to the left -->
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img :src="img[0]" class="aspect-square w-full rounded-xl object-cover" />

          <div class="grid grid-cols-2 gap-4 lg:mt-4">
            <img :src="img[1]" class="aspect-square w-full rounded-xl object-cover" />

            <img :src="img[2]" class="aspect-square w-full rounded-xl object-cover" />

            <img :src="img[3]" class="aspect-square w-full rounded-xl object-cover" />

            <img :src="img[4]" class="aspect-square w-full rounded-xl object-cover" />
          </div>
        </div>

        <!-- Content to the right -->
        <div class="sticky top-0">
          <!-- Pre-order chip -->
          <strong
            class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
          >
            Sustainable
          </strong>
          <strong
            class="ml-2 rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
          >
            All-natural
          </strong>

          <div class="mt-8 flex justify-between">
            <div class="max-w-[35ch] space-y-2">
              <h1 class="text-xl font-bold sm:text-2xl">{{ name }}</h1>
              <!-- TODO: Display if ratings > 3.5 -->
              <p v-if="rating > 3.5" class="text-sm">Highest Rated Product</p>

              <div class="-ml-0.5 flex">
                {{ Math.round(rating * 10) / 10 }}
                <svg
                  class="h-5 w-5 text-yellow-400 mt-0.5 ml-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <p class="text-lg font-bold">${{ price }}</p>
          </div>

          <div class="mt-4">
            <div class="prose max-w-none">
              <p>
                {{ description }}
              </p>
            </div>
          </div>

          <form class="mt-8">
            <fieldset class="mt-4">
              <legend class="mb-1 text-sm font-medium">
                <span v-if="unit.toLowerCase() == 'dozen'">Count</span>
                <span v-else>Quantity</span>
              </legend>

              <div v-if="unit.toLowerCase() == 'pound'" class="flex flex-wrap gap-1">
                <label for="size_xs" class="cursor-pointer">
                  <input type="radio" name="size" id="size_xs" class="peer sr-only" />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    lb
                  </span>
                </label>

                <label for="size_s" class="cursor-pointer">
                  <input type="radio" name="size" id="size_s" class="peer sr-only" />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Oz
                  </span>
                </label>
              </div>

              <div v-else-if="unit.toLowerCase() == 'litre'" class="flex flex-wrap gap-1">
                <label for="size_xs" class="cursor-pointer">
                  <input type="radio" name="size" id="size_xs" class="peer sr-only" />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    L
                  </span>
                </label>
              </div>
              <div v-else class="flex flex-wrap gap-1">
                <label for="size_xs" class="cursor-pointer">
                  <input type="radio" name="size" id="size_xs" class="peer sr-only" />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Dozen
                  </span>
                </label>
              </div>
            </fieldset>

            <div class="mt-8 flex gap-4">
              <div>
                <label for="quantity" class="sr-only">Qty</label>

                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value="1"
                  class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>

              <button
                type="submit"
                class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
              >
                Add to Cart
              </button>
            </div>

            <!-- The Stats section -->
            <div class="mt-10 stats bg-primary text-primary-content">
              <div class="stat">
                <div class="stat-title">Production Date</div>
                <div class="stat-value">{{ productionDate }}</div>
              </div>

              <div class="stat">
                <div class="stat-title">Origin</div>
                <div class="stat-value" :style="{ 'white-space': 'normal' }">{{ origin }}</div>
                <div class="stat-actions">
                  <!-- The button to open modal -->
                  <label for="my-modal" class="btn btn-sm">More info</label>
                  <button class="ml-3 btn btn-sm">About the Farmer</button>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <section class="rounded-lg mt-10 p-6 bg-gray-100 text-gray-800">
              <div class="container p-4 mx-auto text-center">
                <h2 class="text-4xl font-bold">Certifications</h2>
              </div>
              <div class="container flex flex-wrap justify-center mx-auto text-gray-600">
                <div
                  v-for="(value, key, i) in certifications"
                  :key="i"
                  class="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4"
                >
                  <div
                    class="relative inline-block"
                    @mouseenter="showCertificationInfo[i] = true"
                    @mouseleave="showCertificationInfo[i] = false"
                  >
                    <!-- Tooltip -->
                    <p
                      v-if="showCertificationInfo[i]"
                      class="absolute flex items-center z-50 justify-center w-96 p-3 text-primary-content font-bold -translate-x-1/2 bg-primary rounded-lg shadow-lg -top-32 left-1/2 dark:shadow-none shadow-gray-200"
                    >
                      <span class="break-words">{{ value[0] }}</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 absolute rotate-45 -translate-x-1/2 left-1/2 bottom-0.5 -mb-3 transform text-gray-800 fill-primary"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                        ></path>
                      </svg>
                    </p>
                    <!-- Certification icon -->
                    <img :src="value[1]" class="rounded-md hover:opacity-75 cursor-pointer" />
                  </div>
                </div>
              </div>
            </section>

            <!-- The accordion section -->
            <div class="w-full px-4 pt-10">
              <div class="w-full rounded-2xl bg-white p-2">
                <Disclosure as="div" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
                  >
                    <span>What were the testing results?</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-red-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div v-for="(value, key, i) in testingResults" :key="i" class="my-2">
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

                        <p class="whitespace-nowrap text-sm">{{ key }}</p>
                      </span>
                      <span class="leading-4">{{ value }}</span>
                    </div>
                  </DisclosurePanel> </Disclosure
                ><Disclosure class="mt-2" as="div" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
                  >
                    <span>How is transportation handled?</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-red-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {{ transportation }}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure class="mt-2" as="div" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
                  >
                    <span>How do we store dry goods?</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-red-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {{ storageDetails }}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure class="mt-2" as="div" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
                  >
                    <span>Tell me about the production process.</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-red-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {{ processingInformation }}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </form>
        </div>

        <!-- Reviews (still displaying on the left side) -->
        <div>
          <!-- Reviews Summary section -->
          <div class="mx-auto bg-white shadow-lg rounded-lg px-4 py-4">
            <div class="mb-1 tracking-wide px-4 py-4">
              <h2 class="text-gray-800 font-semibold mt-1">{{ reviews.length }} Users Reviews</h2>
              <div class="border-b -mx-8 px-8 pb-3">
                <div class="flex items-center mt-1">
                  <div class="w-1/5 text-indigo-500 tracking-tighter">
                    <span>5 star</span>
                  </div>
                  <div class="w-3/5">
                    <div class="bg-gray-300 w-full rounded-lg h-2">
                      <div
                        class="bg-indigo-600 rounded-lg h-2"
                        :style="{ width: fiveStarsPercentage + '%' }"
                      ></div>
                    </div>
                  </div>
                  <div class="w-1/5 text-gray-700 pl-3">
                    <span class="text-sm">{{ fiveStarsPercentage }}%</span>
                  </div>
                </div>
                <!-- first -->
                <div class="flex items-center mt-1">
                  <div class="w-1/5 text-indigo-500 tracking-tighter">
                    <span>4 star</span>
                  </div>
                  <div class="w-3/5">
                    <div class="bg-gray-300 w-full rounded-lg h-2">
                      <div
                        class="bg-indigo-600 rounded-lg h-2"
                        :style="{ width: fourStarsPercentage + '%' }"
                      ></div>
                    </div>
                  </div>
                  <div class="w-1/5 text-gray-700 pl-3">
                    <span class="text-sm">{{ fourStarsPercentage }}%</span>
                  </div>
                </div>
                <!-- second -->
                <div class="flex items-center mt-1">
                  <div class="w-1/5 text-indigo-500 tracking-tighter">
                    <span>3 star</span>
                  </div>
                  <div class="w-3/5">
                    <div class="bg-gray-300 w-full rounded-lg h-2">
                      <div
                        class="bg-indigo-600 rounded-lg h-2"
                        :style="{ width: threeStarsPercentage + '%' }"
                      ></div>
                    </div>
                  </div>
                  <div class="w-1/5 text-gray-700 pl-3">
                    <span class="text-sm">{{ threeStarsPercentage }}%</span>
                  </div>
                </div>
                <!-- thierd -->
                <div class="flex items-center mt-1">
                  <div class="w-1/5 text-indigo-500 tracking-tighter">
                    <span>2 star</span>
                  </div>
                  <div class="w-3/5">
                    <div class="bg-gray-300 w-full rounded-lg h-2">
                      <div
                        class="bg-indigo-600 rounded-lg h-2"
                        :style="{ width: twoStarsPercentage + '%' }"
                      ></div>
                    </div>
                  </div>
                  <div class="w-1/5 text-gray-700 pl-3">
                    <span class="text-sm">{{ twoStarsPercentage }}%</span>
                  </div>
                </div>
                <!-- 4th -->
                <div class="flex items-center mt-1">
                  <div class="w-1/5 text-indigo-500 tracking-tighter">
                    <span>1 star</span>
                  </div>
                  <div class="w-3/5">
                    <div class="bg-gray-300 w-full rounded-lg h-2">
                      <div
                        class="bg-indigo-600 rounded-lg h-2"
                        :style="{ width: oneStarsPercentage + '%' }"
                      ></div>
                    </div>
                  </div>
                  <div class="w-1/5 text-gray-700 pl-3">
                    <span class="text-sm">{{ oneStarsPercentage }}%</span>
                  </div>
                </div>
                <!-- 5th -->
              </div>
            </div>
          </div>
          <!-- Actual Reviews -->
          <div
            v-for="(object, i) in reviews"
            :key="i"
            class="container flex flex-col p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800 mt-5"
          >
            <div class="flex justify-between p-4">
              <div class="flex space-x-4">
                <div>
                  <img
                    :src="object['profile']"
                    alt=""
                    class="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 class="font-bold">{{ object['name'] }}</h4>
                  <span class="text-xs text-gray-600"> {{ reviewTime(object['created_at']) }}</span>
                </div>
              </div>
              <div class="flex items-center space-x-2 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"
                  ></path>
                </svg>
                <span class="text-xl font-bold">{{ object['rating'] }}</span>
              </div>
            </div>
            <div class="p-4 space-y-2 text-sm text-gray-600">
              <p>
                {{ object['review'] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Recommended For You -->
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Recommended For You</h2>
      </header>

      <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- Frequently Bought Together -->
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Frequently Bought Together</h2>
      </header>

      <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <app-footer></app-footer>

  <!-- Modal for info -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Origin and Production</h3>
      <p class="py-4">
        {{ originInfo }}
      </p>
      <h3 class="mt-3 font-bold text-lg">Farming Practices</h3>
      <p class="py-4">
        {{ farmingPractices }}
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
import { mapWritableState } from 'pinia'
import { db, getDoc, doc } from '@/includes/firebase.config.js'
import useProductStore from '@/stores/product.js'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'ProductView',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
    AppFooter
  },
  async created() {
    const productId = this.$route.query.id
    // Fetch product details
    const docRef = doc(db, 'product-description', productId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const productName = docSnap.data()['name']
      this.name = productName
      const unit = docSnap.data()['unit']
      this.unit = unit
      const description = docSnap.data()['description']
      this.description = description
      const price = docSnap.data()['price']
      this.price = price
      const img = docSnap.data()['img']
      this.img = img
      const origin = docSnap.data()['origin']
      this.origin = origin
      const originInfo = docSnap.data()['originInfo']
      this.originInfo = originInfo
      const productionDate = docSnap.data()['productionDate']
      this.productionDate = productionDate
      const certifications = docSnap.data()['certifications']
      this.certifications = certifications
      const testingResults = docSnap.data()['testingResults']
      this.testingResults = testingResults
      const farmingPractices = docSnap.data()['farmingPractices']
      this.farmingPractices = farmingPractices
      const processingInformation = docSnap.data()['processingInformation']
      this.processingInformation = processingInformation
      const transportation = docSnap.data()['transportation']
      this.transportation = transportation
      const storageDetails = docSnap.data()['storageDetails']
      this.storageDetails = storageDetails
      const reviews = docSnap.data()['reviews']
      this.reviews = reviews
    } else {
      console.log('Could not fetch product details from firestore')
      // Route to error page (not 404 page) OR should i display an error component on the current page? The latter seems more logical.
    }
    // Logic for displaying tooltip of certifications
    this.showCertificationInfo = new Array(Object.keys(this.certifications).length)
    this.showCertificationInfo.fill(false)
  },
  data() {
    return {
      showCertificationInfo: []
    }
  },
  computed: {
    ...mapWritableState(useProductStore, [
      'certifications',
      'description',
      'img',
      'name',
      'farmingPractices',
      'origin',
      'originInfo',
      'price',
      'processingInformation',
      'productionDate',
      'reviews',
      'storageDetails',
      'testingResults',
      'transportation',
      'unit'
    ]),
    rating() {
      let sum = 0
      for (let i = 0; i < this.reviews.length; i++) {
        sum += this.reviews[i]['rating']
      }
      return sum / this.reviews.length
    },
    fiveStarsClass() {
      return `w-${this.fiveStarsPercentage / 100}`
    },
    fiveStarsPercentage() {
      let noOf5Stars = 0
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i]['rating'] == 5) {
          noOf5Stars += 1
        }
      }
      return Math.round((noOf5Stars * 100) / this.reviews.length)
    },
    fourStarsPercentage() {
      let noOf4Stars = 0
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i]['rating'] == 4) {
          noOf4Stars += 1
        }
      }
      return Math.round((noOf4Stars * 100) / this.reviews.length)
    },
    threeStarsPercentage() {
      let noOf3Stars = 0
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i]['rating'] == 3) {
          noOf3Stars += 1
        }
      }
      return Math.round((noOf3Stars * 100) / this.reviews.length)
    },
    twoStarsPercentage() {
      let noOf2Stars = 0
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i]['rating'] == 2) {
          noOf2Stars += 1
        }
      }
      return Math.round((noOf2Stars * 100) / this.reviews.length)
    },
    oneStarsPercentage() {
      let noOf1Stars = 0
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i]['rating'] == 1) {
          noOf1Stars += 1
        }
      }
      return Math.round((noOf1Stars * 100) / this.reviews.length)
    }
  },
  methods: {
    reviewTime(utcSeconds) {
      const d = new Date(utcSeconds * 1000)
      function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000)
        var interval = seconds / 31536000
        if (interval > 1) {
          return Math.floor(interval) + ' years'
        }
        interval = seconds / 2592000
        if (interval > 1) {
          return Math.floor(interval) + ' months'
        }
        interval = seconds / 86400
        if (interval > 1) {
          return Math.floor(interval) + ' days'
        }
        interval = seconds / 3600
        if (interval > 1) {
          return Math.floor(interval) + ' hours'
        }
        interval = seconds / 60
        if (interval > 1) {
          return Math.floor(interval) + ' minutes'
        }
        return Math.floor(seconds) + ' seconds'
      }
      var aDay = 24 * 60 * 60 * 1000
      const hey = timeSince(new Date(d - aDay))
      return hey
    }
  }
}
</script>
