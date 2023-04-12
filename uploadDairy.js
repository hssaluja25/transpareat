import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'dairy'), {
    info: [
        {
            name: 'Butter',
            img: 'images/dairy/butter.webp',
            price: '1.81',
            quantity: '1 Pound'
        },
        {
            name: 'Cheese',
            img: 'images/dairy/cheese.webp',
            price: '13.19',
            quantity: '1 Pound'
        },
        {
            name: 'Condensed Milk',
            img: 'images/dairy/condensed-milk.webp',
            price: '43.36',
            quantity: '24 Ounce'
        }
    ]
})
