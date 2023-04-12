import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'meat-and-poultry'), {
    info: [
        {
            name: 'Bacon',
            img: 'images/meat-and-poultry/bacon.jpg',
            price: '34.99',
            quantity: '28 Ounce'
        },
        {
            name: 'Beef',
            img: 'images/meat-and-poultry/beef.jpg',
            price: '13.19',
            quantity: '2 Ounce'
        },
        {
            name: 'Chicken',
            img: 'images/meat-and-poultry/chicken.png',
            price: '33.36',
            quantity: '6.5 Ounce'
        },
        {
            name: 'Chicken Breasts',
            img: 'images/meat-and-poultry/chicken-breast.jpg',
            price: '33.36',
            quantity: '6.5 Ounce'
        },
        {
            name: 'Duck',
            img: 'images/meat-and-poultry/duck.jpg',
            price: '16.98',
            quantity: '2.5 Ounce'
        },
        {
            name: 'Ground Beef',
            img: 'images/meat-and-poultry/ground-beef.jpg',
            price: '40.66',
            quantity: '1.5 Ounce'
        },
        {
            name: 'Ground Pork',
            img: 'images/meat-and-poultry/ground-pork.jpg',
            price: '34.75',
            quantity: '3.4 Ounce'
        },
        {
            name: 'Ground Turkey',
            img: 'images/meat-and-poultry/ground-turkey.jpg',
            price: '30.24',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Ham',
            img: 'images/meat-and-poultry/ham.jpg',
            price: '27.64',
            quantity: '3.5 Ounce'
        },
        {
            name: 'Lamb',
            img: 'images/meat-and-poultry/lamb.jpg',
            price: '35.4',
            quantity: '4.8 Ounce'
        },
        {
            name: 'Pork',
            img: 'images/meat-and-poultry/pork.jpg',
            price: '19.4',
            quantity: '4.4 Ounce'
        },
        {
            name: 'Sausages',
            img: 'images/meat-and-poultry/sausages.jpg',
            price: '24.6',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Steak',
            img: 'images/meat-and-poultry/steak.jpg',
            price: '22.3',
            quantity: '5.4 Ounce'
        },
        {
            name: 'Turkey',
            img: 'images/meat-and-poultry/turkey.jpg',
            price: '14.2',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Veal',
            img: 'images/meat-and-poultry/veal.jpg',
            price: '25.8',
            quantity: '1.5 Ounce'
        },
    ]
})
