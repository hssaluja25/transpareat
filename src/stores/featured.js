import { defineStore } from 'pinia'

export default defineStore("featured", {
    state: () => ({
        "seafood": null,
        'meat': null,
        'organic': null,
        'dairy': null
    })
})