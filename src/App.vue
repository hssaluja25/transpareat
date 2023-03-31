<template>
  <router-view></router-view>
</template>

<script>
import { auth, onAuthStateChanged } from '@/includes/firebase.config.js'
import useUserStore from '@/stores/user.js'
import { mapWritableState } from 'pinia'

export default {
  name: 'App',
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn'])
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true
      }
    })
  }
}
</script>
