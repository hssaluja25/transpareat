// Stores info about featured products which are shown on the home page
import { defineStore } from 'pinia'

export default defineStore("featured", {
    state: () => ({
        "seafood": null,
        'meat': null,
        'organic': null,
        'dairy': null
    })
})