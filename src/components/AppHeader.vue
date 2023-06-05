<template>
  <div class="navbar bg-base-100">
    <!-- The App Logo -->
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><router-link :to="{ name: 'track' }">Track</router-link></li>
          <li><router-link :to="{ name: 'support' }">Support</router-link></li>
          <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
          <li tabindex="0">
            <a class="justify-between">
              More
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="p-2 z-10 bg-white">
              <li><router-link :to="{ name: 'about' }">Sustainability</router-link></li>
              <li v-if="loggedIn" @click="signOut"><div>Log Out</div></li>
            </ul>
          </li>
        </ul>
      </div>
      <router-link
        :to="{ name: 'home' }"
        class="btn btn-ghost normal-case text-xl inline-flex items-center gap-4"
      >
        <img class="h-9 w-auto" src="@/assets/images/icon.png" />
        <span class="hidden sm:inline-block">Transpareat</span>
      </router-link>
    </div>

    <!-- The links on navbar -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><router-link :to="{ name: 'track' }">Track</router-link></li>
        <li><router-link :to="{ name: 'support' }">Support</router-link></li>
        <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
        <li tabindex="0">
          <a>
            More
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="p-2 z-10 bg-white">
            <li><router-link :to="{ name: 'about' }">Sustainability</router-link></li>
            <li v-if="loggedIn" @click="signOut"><div>Log Out</div></li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- The login/register buttons if user is not logged in -->
    <div v-if="showLoginButton" class="navbar-end space-x-2 sm:space-x-4">
      <router-link :to="{ name: 'login' }" class="btn">Sign In</router-link>
      <router-link :to="{ name: 'register' }" class="btn btn-secondary">Register</router-link>
    </div>
    <!-- Show search box, notifications, cart and avatar if user is logged in -->
    <div v-else class="flex items-center justify-end navbar-end space-x-2 sm:space-x-4">
      <div class="flex items-center gap-4">
        <a
          class="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
        >
          <span class="sr-only">Notifications</span>
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </a>
      </div>

      <!-- Cart button -->
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="btn m-1 p-3"
          style="display: flex; flex-direction: column; align-items: center"
        >
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96">
          <li>
            <router-link
              :to="{ name: 'cart' }"
              style="display: flex; justify-content: space-between"
            >
              <span>Lobster</span>
              <img
                src="@/assets/images/cart/lobster.webp"
                width="100"
                height="100"
                style="float: right"
              />
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'cart' }"
              style="display: flex; justify-content: space-between"
            >
              <span> Organic Eggs</span>
              <img src="@/assets/images/cart/organic-eggs.webp" width="100" height="100" />
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'cart' }"
              style="display: flex; justify-content: space-between"
            >
              <span> Veal</span>
              <img src="@/assets/images/cart/veal.webp" width="100" height="100" />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'cart' }"> Go to cart</router-link>
          </li>
        </ul>
      </div>

      <!-- Avatar -->
      <a @click="showSidebar = !showSidebar" class="block shrink-0 pr-10 hover:cursor-pointer">
        <span class="sr-only">Profile</span>
        <img
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-10 w-10 rounded-full object-cover"
        />
      </a>
    </div>
  </div>
  <!-- Sidebar to be shown when the avatar is clicked -->
  <div>
    <div v-if="showSidebar" class="flex h-screen flex-col justify-between bg-white">
      <div class="px-4">
        <span class="mt-5 mr-5 flex justify-end hover:cursor-pointer" @click="showSidebar = false"
          ><font-awesome-icon :icon="['fas', 'xmark']"
        /></span>
        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <div class="flex items-center gap-2">
                <font-awesome-icon :icon="['fa', 'bell']" shake />

                <span class="text-sm font-medium"> Notification Preferences </span>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span class="text-sm font-medium"> Email Notifications </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <font-awesome-icon :icon="['fas', 'bell']" />

                <span class="text-sm font-medium"> Push Notifications </span>
              </a>
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <font-awesome-icon :icon="['fas', 'comment-sms']" />

                <span class="text-sm font-medium"> SMS Notifications </span>
              </a>
            </nav>
          </details>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span class="text-sm font-medium"> Orders </span>
          </a>

          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span class="text-sm font-medium"> Account </span>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Account Nav" class="mt-2 flex flex-col px-4">
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>

                <span class="text-sm font-medium"> Details </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>

                <span class="text-sm font-medium"> Security </span>
              </a>

              <form>
                <button
                  type="button"
                  class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>

                  <span class="text-sm font-medium" @click="signOut()"> Logout </span>
                </button>
              </form>
            </nav>
          </details>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p class="text-xs">
              <strong class="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia'
import useUserStore from '@/stores/user.js'

export default {
  name: 'NavBar',
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn']),
    showLoginButton() {
      if (this.loggedIn) return false
      else return true
    }
  },
  data() {
    return {
      showSidebar: false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['signOutUser']),
    async signOut() {
      this.showSidebar = false
      await this.signOutUser()
      this.loggedIn = false
    }
  }
}
</script>
