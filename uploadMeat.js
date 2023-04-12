import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'meat-and-poultry'), {
    info: [
        {
            name: 'Bacon',
            img: 'images/meat-and-poultry/bacon.webp',
            price: '34.99',
            quantity: '28 Ounce'
        },
        {
            name: 'Beef',
            img: 'images/meat-and-poultry/beef.webp',
            price: '13.19',
            quantity: '2 Ounce'
        },
        {
            name: 'Chicken',
            img: 'images/meat-and-poultry/chicken.webp',
            price: '33.36',
            quantity: '6.5 Ounce'
        },
        {
            name: 'Chicken Breasts',
            img: 'images/meat-and-poultry/chicken-breast.webp',
            price: '33.36',
            quantity: '6.5 Ounce'
        },
        {
            name: 'Duck',
            img: 'images/meat-and-poultry/duck.webp',
            price: '16.98',
            quantity: '2.5 Ounce'
        },
        {
            name: 'Ground Beef',
            img: 'images/meat-and-poultry/ground-beef.webp',
            price: '40.66',
            quantity: '1.5 Ounce'
        },
        {
            name: 'Ground Pork',
            img: 'images/meat-and-poultry/ground-pork.webp',
            price: '34.75',
            quantity: '3.4 Ounce'
        },
        {
            name: 'Ground Turkey',
            img: 'images/meat-and-poultry/ground-turkey.webp',
            price: '30.24',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Ham',
            img: 'images/meat-and-poultry/ham.webp',
            price: '27.64',
            quantity: '3.5 Ounce'
        },
        {
            name: 'Lamb',
            img: 'images/meat-and-poultry/lamb.webp',
            price: '35.4',
            quantity: '4.8 Ounce'
        },
        {
            name: 'Pork',
            img: 'images/meat-and-poultry/pork.webp',
            price: '19.4',
            quantity: '4.4 Ounce'
        },
        {
            name: 'Sausages',
            img: 'images/meat-and-poultry/sausages.webp',
            price: '24.6',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Steak',
            img: 'images/meat-and-poultry/steak.webp',
            price: '22.3',
            quantity: '5.4 Ounce'
        },
        {
            name: 'Turkey',
            img: 'images/meat-and-poultry/turkey.webp',
            price: '14.2',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Veal',
            img: 'images/meat-and-poultry/veal.webp',
            price: '25.8',
            quantity: '1.5 Ounce'
        },
    ]
})
