import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './includes/validation.js'
import '@/assets/base.css'
import InstantSearch from 'vue-instantsearch/vue3/es';
import App from './App.vue'
import { auth } from '@/includes/firebase.config.js'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faCartShopping, faClock, faCommentSms, faCrown, faEnvelope, faKey, faLocationDot, faLock, faMoneyBill, faShuffle, faTruck, faUniversalAccess, faUserPlus, faXmark, } from '@fortawesome/free-solid-svg-icons'

let app = null;
auth.onAuthStateChanged(() => {
    if (!app) {
        library.add([faCartShopping, faTruck, faMoneyBill, faLock, faUserPlus, faUniversalAccess, faKey, faCrown, faShuffle, faEnvelope, faBell, faCommentSms, faXmark, faClock, faLocationDot])
        app = createApp(App)
        app.component('font-awesome-icon', FontAwesomeIcon)
        app.use(VeeValidatePlugin)
        app.use(createPinia())
        app.use(router)
        app.use(InstantSearch);
        app.mount('#app')
    }
})
