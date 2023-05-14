// Used by the Success Page to determine whether it should be rendered or redirect
import { defineStore } from 'pinia'

export default defineStore("featured", {
    state: () => ({
        'completed': false
    })
})