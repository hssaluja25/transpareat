<template>
  <nav-bar></nav-bar>
  <div class="text-gray-800">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold sm:text-4xl">Get in Touch</h2>
        <p class="mt-4 text-lg text-gray-600">
          What would you like help with today? You can quickly take care of most things here, or
          connect with us when needed.
        </p>
      </div>
      <dl
        class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
      >
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'truck']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">A delivery, order or return</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                delivery
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                return
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'money-bill']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Payment and charges</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                payments
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                charges
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Address, security & privacy</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                security
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                privacy
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fasl', 'user-plus']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Memberships</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                memberships
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                enrollments
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'universal-access']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Accessibility</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                accessibility
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                accommodation
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'key']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Login and Password</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                login
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                password
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'crown']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Subscriptions</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                subscriptions
              </span>

              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                joining
              </span>
            </div>
          </div>
        </article>
        <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              <font-awesome-icon :icon="['fas', 'shuffle']" />
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">Something Else</h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                miscellaneous
              </span>
            </div>
          </div>
        </article>
      </dl>
    </div>
  </div>
  <section class="ml-12">
    <div class="container px-6 py-12 mx-auto">
      <div>
        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
          Chat to our friendly team
        </h1>

        <p class="mt-3 text-gray-500">
          We'd love to hear from you. Please fill out this form or shoot us an email.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
        <div
          class="p-4 py-6 rounded-lg bg-gray-50 md:p-8"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <form>
            <div class="-mx-2 md:items-center md:flex">
              <div class="flex-1 px-2">
                <label class="block mb-2 text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="John "
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="flex-1 px-2 mt-4 md:mt-0">
                <label class="block mb-2 text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div class="mt-4">
              <label class="block mb-2 text-sm text-gray-600">Email address</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="w-full mt-4">
              <label class="block mb-2 text-sm text-gray-600">Message</label>
              <textarea
                class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="button"
              class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Send message
            </button>
          </form>
        </div>
        <img src="@/assets/images/support/hi2.jpg" alt="support" class="rounded-2xl mt-11" />
      </div>
    </div>
  </section>

  <!-- Chat window. Uncomment this if you want to implement the chat functionality  -->
  <!-- <div class="mockup-window border bg-base-300 w-1/2 mx-auto mb-10">
    <div class="pl-5 chat chat-start">
      <div class="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
    </div>
    <div class="pr-5 chat chat-end">
      <div class="chat-bubble">You underestimate my power!</div>
    </div>
    <div class="pl-5 chat chat-start">
      <div class="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
    </div>
    <div class="pr-5 pb-3 chat chat-end">
      <div class="chat-bubble">You underestimate my power!</div>
    </div>
    <div class="form-control">
      <div class="input-group">
        <input type="text" placeholder="Enter a message…" class="input input-bordered" />
        <button class="btn btn-square">Send</button>
      </div>
    </div>
  </div> -->

  <section class="ml-12">
    <div class="container px-6 py-12 mx-auto">
      <div>
        <p class="font-medium text-[#D14D72]">Contact us</p>

        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Get in touch</h1>

        <p class="mt-3 text-gray-500">Our friendly team is always here to chat.</p>
      </div>

      <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <span class="inline-block p-3 text-[#D14D72] rounded-full bg-[#FCC8D1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>

          <h2 class="mt-4 text-lg font-medium text-gray-800">Email</h2>
          <p class="mt-2 text-gray-500">Our friendly team is here to help.</p>
          <p class="mt-2 text-[#D14D72] hover:cursor-pointer">
            <a href="mailto:hello@transpareat.com" target="">hello@transpareat.com</a>
          </p>
        </div>

        <div>
          <span class="inline-block p-3 text-[#D14D72] rounded-full bg-[#FCC8D1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>

          <h2 class="mt-4 text-lg font-medium text-gray-800">Office</h2>
          <p class="mt-2 text-gray-500">Come say hello at our office HQ.</p>
          <p class="mt-2 text-[#D14D72]">100 Smith Street Collingwood VIC 3066 AU</p>
        </div>

        <div>
          <span class="inline-block p-3 text-[#D14D72] rounded-full bg-[#FCC8D1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>

          <h2 class="mt-4 text-lg font-medium text-gray-800">Phone</h2>
          <p class="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
          <p class="mt-2 text-[#D14D72]">+1 (555) 000-0000</p>
        </div>
      </div>
    </div>
  </section>
  <app-footer></app-footer>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'BecomeSeller',
  components: {
    NavBar,
    AppFooter
  }
}
</script>
