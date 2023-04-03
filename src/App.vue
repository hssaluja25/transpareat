<template>
  <router-view></router-view>
</template>

<script>
import { auth, db, getDoc, doc } from '@/includes/firebase.config.js'
import useUserStore from '@/stores/user.js'
import useFeaturedStore from '@/stores/featured.js'
import { mapWritableState } from 'pinia'

export default {
  name: 'App',
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn']),
    ...mapWritableState(useFeaturedStore, ['seafood', 'meat', 'organic', 'dairy'])
  },
  async created() {
    // Set loggedIn = true if user logged in
    if (auth.currentUser) {
      this.loggedIn = true
    }

    // Fetch featured seafood from firestore
    const docRef = doc(db, 'featured', 'seafood')
    // Using await, any code following this line won't be executed unless getDoc has finished running
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const info = docSnap.data()['info']
      this.seafood = info
    } else {
      console.log('Could not fetch featured seafood from firestore')
      // Route to error page (not 404 page) OR should i display an error component on the current page? The latter seems more logical.
    }

    // Fetch featured meat from firestore
    const docRef2 = doc(db, 'featured', 'meat-and-poultry')
    // Using await, any code following this line won't be executed unless getDoc has finished running
    const docSnap2 = await getDoc(docRef2)
    if (docSnap2.exists()) {
      const info2 = docSnap2.data()['info']
      this.meat = info2
    } else {
      console.log('Could not fetch featured meat from firestore')
      // Route to error page (not 404 page) OR should i display an error component on the current page? The latter seems more logical.
    }

    // Fetch featured organic products from firestore
    const docRef3 = doc(db, 'featured', 'organic')
    // Using await, any code following this line won't be executed unless getDoc has finished running
    const docSnap3 = await getDoc(docRef3)
    if (docSnap3.exists()) {
      const info3 = docSnap3.data()['info']
      this.organic = info3
    } else {
      console.log('Could not fetch featured organic products from firestore')
      // Route to error page (not 404 page) OR should i display an error component on the current page? The latter seems more logical.
    }

    // Fetch featured dairy products from firestore
    const docRef4 = doc(db, 'featured', 'dairy')
    // Using await, any code following this line won't be executed unless getDoc has finished running
    const docSnap4 = await getDoc(docRef4)
    if (docSnap4.exists()) {
      const info4 = docSnap4.data()['info']
      this.dairy = info4
    } else {
      console.log('Could not fetch featured dairy products from firestore')
      // Route to error page (not 404 page) OR should i display an error component on the current page? The latter seems more logical.
    }
  }
}
</script>
