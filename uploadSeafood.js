import { db, setDoc, doc } from '@/includes/firebase.config.js'

await setDoc(doc(db, 'featured', 'seafood'), {
    info: [
        {
            name: 'Anchovies',
            img: 'images/seafood/anchovies.jpg',
            price: '34.99',
            quantity: '28 Ounce'
        },
        {
            name: 'Caviar',
            img: 'images/seafood/caviar.jpg',
            price: '13.19',
            quantity: '2 Ounce'
        },
        {
            name: 'Clams',
            img: 'images/seafood/clams.jpg',
            price: '33.36',
            quantity: '6.5 Ounce'
        },
        {
            name: 'Crabs',
            img: 'images/seafood/crab.jpg',
            price: '16.98',
            quantity: '2.5 Ounce'
        },
        {
            name: 'Lobster',
            img: 'images/seafood/lobster.jpg',
            price: '40.66',
            quantity: '1.5 Ounce'
        },
        {
            name: 'Mussels',
            img: 'images/seafood/mussels.jpg',
            price: '34.75',
            quantity: '3.4 Ounce'
        },
        {
            name: 'Octopus',
            img: 'images/seafood/octopus.jpg',
            price: '30.24',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Oyster',
            img: 'images/seafood/oyster.jpg',
            price: '27.64',
            quantity: '3.5 Ounce'
        },
        {
            name: 'Salmon',
            img: 'images/seafood/salmon.jpg',
            price: '35.4',
            quantity: '4.8 Ounce'
        },
        {
            name: 'Sardines',
            img: 'images/seafood/Sardines.jpg',
            price: '19.4',
            quantity: '4.4 Ounce'
        },
        {
            name: 'Scallops',
            img: 'images/seafood/scallops.jpg',
            price: '24.6',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Shellfish',
            img: 'images/seafood/shellfish.jpg',
            price: '22.3',
            quantity: '5.4 Ounce'
        },
        {
            name: 'Squid',
            img: 'images/seafood/squid.jpg',
            price: '14.2',
            quantity: '2.4 Ounce'
        },
        {
            name: 'Sushi',
            img: 'images/seafood/sushi.jpg',
            price: '25.8',
            quantity: '1.5 Ounce'
        },
        {
            name: 'Tuna',
            img: 'images/seafood/tuna.jpg',
            price: '26.8',
            quantity: '6.4 Ounce'
        }
    ]
})
