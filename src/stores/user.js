import { defineStore } from 'pinia'
import {
    auth,
    provider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from '@/includes/firebase.config.js'

export default defineStore('user', {
    state: () => ({
        loggedIn: false,
    }),
    actions: {
        async continueWithGoogle() {
            const userCred = await signInWithPopup(auth, provider)
            const docId = userCred.user.uid
            GoogleAuthProvider.credentialFromResult(userCred)
            return docId
        },
        async createUserWithEmail(values) {
            const userCred = await createUserWithEmailAndPassword(auth, values.email, values.password)
            const docId = userCred.user.uid
            return docId
        },
        async signInWithEmail(values) {
            const userCred = await signInWithEmailAndPassword(auth, values.email, values.password)
            const docId = userCred.user.uid
            return docId
        },
        async signOutUser() {
            try { signOut(auth) } catch (e) {
                console.error("Error logging out user")
            }
        }
    }
})