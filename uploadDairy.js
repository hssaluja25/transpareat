import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'dairy'), {
    info: [
        {
            name: 'Butter',
            img: 'src/assets/images/dairy/butter.jpg',
            price: '1.81',
            quantity: '1 Pound'
        },
        {
            name: 'Cheese',
            img: 'src/assets/images/dairy/cheese.jpg',
            price: '13.19',
            quantity: '1 Pound'
        },
        {
            name: 'Condensed Milk',
            img: 'src/assets/images/dairy/condensed-milk.jpg',
            price: '43.36',
            quantity: '24 Ounce'
        }
    ]
})
