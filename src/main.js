import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './includes/validation.js'
import '@/assets/base.css'
import App from './App.vue'
import { auth } from '@/includes/firebase.config.js'
import router from './router'

let app = null;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        app.use(VeeValidatePlugin)
        app.use(createPinia())
        app.use(router)
        app.mount('#app')
    }
})
