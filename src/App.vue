<template>
  <router-view></router-view>
</template>

<script>
import { auth } from '@/includes/firebase.config.js'
import useUserStore from '@/stores/user.js'
import { mapWritableState } from 'pinia'

export default {
  name: 'App',
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.loggedIn = true
    }
  }
}
</script>
