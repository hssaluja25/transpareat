// Stores product info
import { defineStore } from 'pinia'

export default defineStore('product', {
        state: () => ({
                'name': null,
                'unit': null,
                'description': null,
                'price': null,
                'img': null,
                'origin': null,
                'originInfo': null,
                'productionDate': null,
                'certifications': null,
                'testingResults': null,
                'farmingPractices': null,
                'processingInformation': null,
                'transportation': null,
                'storageDetails': null,
                'reviews': null,
                // The following 2 would be fetched from a different API call
                'recommendations': null,
                'frequently-bought-together': null,
        })
})