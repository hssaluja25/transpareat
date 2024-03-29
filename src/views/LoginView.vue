<template>
  <body>
    <div
      v-if="!selected"
      class="flex md:flex-row md:justify-center md:items-center flex-col items-center my-10 h-screen gap-12"
    >
      <!-- "For consumers" card -->
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="@/assets/images/consumers.png" /></figure>
        <div class="card-body">
          <h2 class="card-title">For consumers</h2>
          <p>
            Track the journey of your food products from farm to table and ensure transparency and
            accountability in the food supply chain.
          </p>
          <div class="card-actions justify-end">
            <button @click="pressedLogin('consumer')" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
      <!-- "For supply chain managers" card -->
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="@/assets/images/supply-chain-management.png" /></figure>
        <div class="card-body">
          <h2 class="card-title">For supply chain managers</h2>
          <p>
            Gain secure access to real-time supply chain data and analytics to optimize your
            operations and improve your bottom line.
          </p>
          <div class="card-actions justify-end">
            <button @click="pressedLogin('manager')" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-indigo-50 min-h-screen">
      <div
        class="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center"
      >
        <!-- The Sign Up Box -->
        <div
          class="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6"
        >
          <p
            tabindex="0"
            class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p
            tabindex="0"
            class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Don't have an account?
            <router-link
              :to="{ name: 'register' }"
              class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
            >
              Sign up here</router-link
            >
          </p>
          <button
            :disabled="disable_submission"
            @click="signInWithGoogle()"
            aria-label="Continue with google"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:bg-gray-100"
          >
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
          </button>
          <!-- <button
            :disabled="show_alert"
            aria-label="Continue with github"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-gray-100"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                fill="#333333"
              />
            </svg>

            <p class="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
          </button> -->
          <div class="w-full flex items-center justify-between py-5">
            <hr class="w-full bg-gray-400" />
            <p class="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
            <hr class="w-full bg-gray-400" />
          </div>
          <vee-form @submit="loginWithEmail">
            <!-- Email div -->
            <div>
              <label for="email" class="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <vee-field
                :rules="'required|min:5|max:100|email'"
                name="email"
                id="email"
                aria-labelledby="email"
                type="email"
                class="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                placeholder="e.g: john@gmail.com "
              />
              <ErrorMessage class="text-red-600" name="email"></ErrorMessage>
            </div>
            <!-- Password div -->
            <div class="mt-6 w-full">
              <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div class="relative flex items-center justify-center">
                <vee-field
                  :rules="{
                    required,
                    min: 8,
                    max: 100,
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
                  }"
                  name="password"
                  id="myInput"
                  :type="show ? 'password' : 'text'"
                  class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <!-- Eyeball -->
                <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <div id="show" @click="show = false" v-if="show">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>
                  <div @click="show = true" v-if="show === false" class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-eye-off"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#27272A"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="3" y1="3" x2="21" y2="21" />
                      <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                      <path
                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <ErrorMessage class="text-red-600" name="password"></ErrorMessage>
            </div>

            <!-- Alert box -->
            <div v-if="show_alert" class="alert shadow-lg mt-8" :class="bg_color">
              <div>
                <!-- Info icon -->
                <svg
                  v-if="bg_color === 'alert-info'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <!-- Success icon -->
                <svg
                  v-else-if="bg_color === 'alert-success'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <!-- Error icon -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>{{ alert_msg }}</span>
              </div>
              <!-- Retry button -->
              <div class="flex-none" v-if="bg_color == 'alert-error'">
                <button class="btn btn-sm">Retry</button>
              </div>
            </div>

            <!-- Login button -->
            <div v-else class="mt-8">
              <button
                role="button"
                class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Log In
              </button>
            </div>
          </vee-form>
        </div>
        <!-- The text at the right -->
        <div class="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
          <div class="flex items-start mt-8">
            <div>
              <svg
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0666 6.65142C15.7914 6.17428 16.6517 5.94576 17.5177 6.00035C18.3837 6.05493 19.2085 6.38965 19.8677 6.95402C20.5268 7.51839 20.9845 8.28179 21.1718 9.12907C21.3591 9.97636 21.2658 10.8616 20.906 11.6512C20.5461 12.4408 19.9393 13.092 19.177 13.5065C18.4146 13.921 17.5382 14.0764 16.6798 13.9492C15.8215 13.822 15.0277 13.4192 14.4184 12.8014C13.809 12.1836 13.4171 11.3844 13.3016 10.5244C12.9366 8.73142 12.7946 6.57642 13.5086 4.62542C14.2746 2.53542 15.9726 0.821417 19.0136 0.0254175C19.2671 -0.0328119 19.5332 0.00995174 19.7556 0.144642C19.978 0.279332 20.1392 0.495356 20.205 0.746904C20.2708 0.998453 20.2361 1.26575 20.1081 1.4921C19.9802 1.71846 19.7691 1.88608 19.5196 1.95942C17.0596 2.60342 15.9096 3.88942 15.3866 5.31342C15.2316 5.73842 15.1266 6.18742 15.0666 6.65142Z"
                  fill="#4B5563"
                />
                <path
                  d="M2.06664 6.65142C2.79142 6.17428 3.65171 5.94576 4.51773 6.00035C5.38375 6.05493 6.20853 6.38965 6.86766 6.95402C7.5268 7.51839 7.98454 8.28179 8.17183 9.12907C8.35912 9.97636 8.26581 10.8616 7.90597 11.6512C7.54612 12.4408 6.93927 13.092 6.17695 13.5065C5.41463 13.921 4.53818 14.0764 3.67982 13.9492C2.82145 13.822 2.02772 13.4192 1.41836 12.8014C0.808998 12.1836 0.417052 11.3844 0.301644 10.5244C-0.0633559 8.73142 -0.205356 6.57642 0.508644 4.62542C1.27464 2.53542 2.97264 0.821417 6.01364 0.0254175C6.26706 -0.0328119 6.53318 0.00995174 6.7556 0.144642C6.97801 0.279332 7.13921 0.495356 7.20502 0.746904C7.27084 0.998453 7.23609 1.26575 7.10814 1.4921C6.98019 1.71846 6.7691 1.88608 6.51964 1.95942C4.05964 2.60342 2.90964 3.88942 2.38664 5.31342C2.23164 5.73842 2.12664 6.18742 2.06664 6.65142Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <p v-if="user == 'consumer'" class="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">
              Our platform uses blockchain technology to enable end-to-end traceability of food
              products, from farm to table. With our platform, you can track the journey of your
              food products, ensuring transparency and accountability in the food supply chain.
            </p>
            <p v-else class="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">
              Track your supply chain operations in real-time, reduce food waste, and increase
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import useUserStore from '@/stores/user.js'
import useRoleStore from '@/stores/role.js'
import { checkFirestore } from '@/includes/firestore.js'

export default {
  name: 'LoginView',
  data() {
    return {
      // Whether to show the password in the password field
      show: true,
      // Whether the user has clicked on the Login button for either consumer or supply chain manager
      selected: false,
      // When user clicks on the login button on the form page, show alert and disable (or hide) button
      show_alert: false,
      // Separate show_alert and disable_button properties because it is not necessary that these will have the same values all the time. Example in case of error, show_alert would be true but disable_button would be false
      disable_submission: false,
      // On success or error change the bg color
      bg_color: 'alert-info',
      // On success or error, change the message shown in the alert box
      alert_msg: 'Logging you in'
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn']),
    ...mapWritableState(useRoleStore, ['role'])
  },
  methods: {
    ...mapActions(useUserStore, ['continueWithGoogle', 'signInWithEmail', 'signOutUser']),
    pressedLogin(role) {
      this.selected = true
      this.role = role
    },
    async signInWithGoogle() {
      try {
        this.show_alert = true
        this.disable_submission = true
        const docId = await this.continueWithGoogle()
        const hasPermissions = await checkFirestore(this.role, docId)
        console.log(hasPermissions)
        if (!hasPermissions) {
          // signing out st when the user refreshes, loggedIn is not true
          await this.signOutUser()
          throw new Error("The user doesn't have the correct access permisssions")
        }
        this.loggedIn = true
        this.alert_msg = 'Logged in successfully'
        this.bg_color = 'alert-success'
        this.$router.push({ name: 'home' })
      } catch (error) {
        const errorMessage = error.message
        console.log(error.code)
        if (errorMessage == "The user doesn't have the correct access permisssions") {
          this.alert_msg = `This user is not a ${this.role}`
        } else if (error.code === 'auth/user-not-found') {
          this.alert_msg = "Account doesn't exist"
        } else {
          this.alert_msg = 'There was an unexpected error. Please try again.'
        }
        this.bg_color = 'alert-error'
        this.disable_submission = false
      }
    },
    async loginWithEmail(values) {
      try {
        this.show_alert = true
        this.disable_submission = true
        this.alert_msg = 'Logging you in'
        this.bg_color = 'alert-info'
        const docId = await this.signInWithEmail(values)
        const hasPermissions = await checkFirestore(this.role, docId)
        console.log(`hasPermissions: ${hasPermissions}`)
        if (!hasPermissions) {
          // signing out st when the user refreshes, loggedIn is not true
          await this.signOutUser()
          throw new Error("The user doesn't have the correct access permisssions")
        }
        this.loggedIn = true
        this.alert_msg = 'Logged in successfully'
        this.bg_color = 'alert-success'
        this.$router.push({ name: 'home' })
      } catch (error) {
        const errorMessage = error.message
        console.log(error.code)
        if (errorMessage == "The user doesn't have the correct access permisssions") {
          this.alert_msg = `This user is not a ${this.role}`
        } else if (error.code === 'auth/user-not-found') {
          this.alert_msg = "Account doesn't exist"
        } else if (error.code === 'auth/wrong-password') {
          this.alert_msg = 'Invalid credentials'
        } else {
          this.alert_msg = 'There was an unexpected error. Please try again.'
        }
        this.bg_color = 'alert-error'
        this.disable_submission = false
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    const store = useUserStore()
    if (!store.loggedIn) {
      // If user is not logged in, allow them to proceed to login route
      next()
    } else {
      // If user is already logged in, they should be routed to the home page
      next({ name: 'home' })
    }
  }
}
</script>
