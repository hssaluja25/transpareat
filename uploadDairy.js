import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'dairy'), {
    info: [
        {
            name: 'Butter',
            img: 'images/dairy/butter.jpg',
            price: '1.81',
            quantity: '1 Pound'
        },
        {
            name: 'Cheese',
            img: 'images/dairy/cheese.jpg',
            price: '13.19',
            quantity: '1 Pound'
        },
        {
            name: 'Condensed Milk',
            img: 'images/dairy/condensed-milk.jpg',
            price: '43.36',
            quantity: '24 Ounce'
        }
    ]
})
