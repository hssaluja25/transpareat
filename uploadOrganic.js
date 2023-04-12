import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'organic'), {
    info: [
        {
            name: 'Organic Apples',
            img: 'images/organic/organic-apple.webp',
            price: '1.81',
            quantity: '1 Pound'
        },
        {
            name: 'Organic Beef',
            img: 'images/organic/organic-beef.webp',
            price: '13.19',
            quantity: '1 Pound'
        },
        {
            name: 'Organic Coffee',
            img: 'images/organic/organic-coffee.webp',
            price: '43.36',
            quantity: '24 Ounce'
        },
        {
            name: 'Organic Eggs',
            img: 'images/organic/organic-eggs.webp',
            price: '3.29',
            quantity: 'A Dozen'
        },
        {
            name: 'Organic Milk',
            img: 'images/organic/organic-milk.webp',
            price: '4.66',
            quantity: '64 Ounce'
        },
        {
            name: 'Organic Quinoa',
            img: 'images/organic/organic-quinoa.webp',
            price: '5.75',
            quantity: '32 Ounce'
        },
        {
            name: 'Organic Spinach',
            img: 'images/organic/organic-spinach.webp',
            price: '3.24',
            quantity: '5 Ounce'
        },
        {
            name: 'Organic Strawberries',
            img: 'images/organic/organic-strawberries.webp',
            price: '4.64',
            quantity: '1 Pound'
        },
        {
            name: 'Organic Tomatoes',
            img: 'images/organic/organic-tomato.webp',
            price: '2.12',
            quantity: '28 Ounce'
        }
    ]
})
