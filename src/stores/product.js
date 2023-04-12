import { defineStore } from 'pinia'

export default defineStore('product', {
        state: () => ({
                'name': 'Organic Milk',
                'unit': 'dozen',
                'description': 'Organic milk is a popular choice among health-conscious consumers who prioritize animal welfare and sustainable agriculture. Organic milk comes from cows that are raised on farms that follow strict organic farming practices, such as not using synthetic pesticides or fertilizers on the pastures where the cows graze, and not giving the cows growth hormones or antibiotics. This results in milk that is free from harmful chemicals and additives, and is often considered to have a richer, more natural taste than conventionally-produced milk.',
                'price': 12.12,
                // An array of images
                'img': ['src/assets/images/products/milk/milk-1.jpg', 'src/assets/images/products/milk/milk-2.jpg', 'src/assets/images/products/milk/milk-3.jpg', 'src/assets/images/products/milk/milk-4.jpg', 'src/assets/images/products/milk/milk-5.jpg'],

                // Provide information about the farm or farms where the food was grown or raised, including the name, location, and farming practices. This could include information about the use of pesticides, fertilizers, and other chemicals.
                // Or farm details
                // You can put origin state in the stat. For more detailed, info use accordion
                'origin': 'Happy Cow Diary',
                'originInfo': "This organic milk was produced by Happy Cow Dairy, a family-owned farm located in the rolling hills of Vermont. The farm's pastures are certified organic and are free from synthetic pesticides, fertilizers, and other harmful chemicals. The cows at Happy Cow Dairy are raised in a natural, stress- free environment and are given plenty of space to graze and exercise.\n\nIn addition to following strict organic farming practices, Happy Cow Dairy also employs sustainable agriculture methods, such as rotational grazing and composting, to reduce their environmental impact. The farm's commitment to animal welfare and sustainability has earned them various certifications, including the USDA Organic and Animal Welfare Approved.\n\nWhen you buy Happy Cow Dairy's organic milk, you can be sure that you're getting a high-quality product that is free from harmful chemicals and additives, and is produced using responsible farming practices.",
                'productionDate': '3rd April, 2023',
                // Key is the certification name.
                // Value is an array containing 2 items.
                // First item is the description, second item is the icon image
                'certifications': { 'USDA Organic': ["In the United States, organic milk must be certified by the USDA(United States Department of Agriculture) to be labeled as 'organic.' The USDA organic standards require that the cows are raised on certified organic land, fed organic feed, and are not given antibiotics or growth hormones.", 'src/assets/images/products/milk/certifications/usda-organic.jpg'], 'EU Organic': ['In the European Union, organic milk must meet the EU organic standards, which require that the cows are raised on certified organic land, fed organic feed, and are not given antibiotics or growth hormones.', 'src/assets/images/products/milk/certifications/eu-organic.png'], 'Certified Humane': ['This certification is awarded by the Humane Farm Animal Care(HFAC) organization and requires that the cows are raised in a humane manner and have access to pasture.', 'src/assets/images/products/milk/certifications/certified-humane.png'], 'Animal Welfare Approved': ['This certification is awarded by the Animal Welfare Institute and requires that the cows are raised in a humane manner and have access to pasture.', 'src/assets/images/products/milk/certifications/animal-welfare-approved.png'], 'Non - GMO Project Verified': ['This certification is awarded by the Non- GMO Project and requires that the milk comes from cows that have not been fed genetically modified organisms(GMOs).', 'src/assets/images/products/milk/certifications/non-gmo.jpg'] },
                'testingResults': {
                        'Antibiotic testing': 'Result: The antibiotic testing of the organic milk showed no detectable levels of antibiotics, indicating that the milk was free from antibiotic residues.', 'Pesticide testing': 'Result: The pesticide testing of the organic milk showed no detectable levels of pesticides, indicating that the milk was free from pesticide residues.', 'Fat content testing': 'Result: The fat content testing of the organic milk showed that it contained 3.5% fat, which is within the acceptable range for whole milk.', 'Protein content testing': 'Result: The protein content testing of the organic milk showed that it contained 8 grams of protein per 8 oz. serving, which is within the acceptable range for milk.', 'Shelf life testing': 'Result: The shelf life testing of the organic milk showed that it had a shelf life of 18 days when stored at a temperature of 40°F or below, which is within the acceptable range for milk.'
                },
                // any relevant information about the harvesting process, such as the use of machinery or hand picking.
                'farmingPractices': 'Happy Cow Dairy follows strict production and farming practices to ensure the quality and safety of their organic milk. The cows are raised on a certified organic farm and are fed a diet of organic grass, hay, and grains. The farm practices rotational grazing, which involves moving the cows to fresh pasture regularly to promote healthy soil and grass growth. The cows are never given antibiotics, synthetic hormones, or genetically modified organisms (GMOs). Happy Cow Dairy also prioritizes the welfare of their cows, ensuring they have ample space, clean water, and comfortable living conditions. The milk from the cows is collected and transported to the processing facility in a refrigerated tank to maintain freshness and quality. These production and farming practices ensure that the organic milk produced by Happy Cow Dairy is of the highest quality, is safe for consumption, and is produced in an environmentally and socially responsible manner.',
                // If the food has undergone any processing, such as washing, cutting, or packaging, include information about the process and where it took place.
                'processingInformation': `As Happy Cow Diary, our production process starts with sourcing milk from farms that meet organic standards. Once the milk is collected, it is immediately transported to our processing facility where it undergoes a series of steps to ensure its quality and safety. The milk is first pasteurized at a temperature of 161°F for 15 seconds to eliminate harmful bacteria while preserving its nutritional value. After pasteurization, the milk is cooled and homogenized to ensure consistent texture and prevent separation. The milk is then packaged into sterilized containers and labeled with its organic certification number, expiration date, and other pertinent information. Finally, the packaged organic milk is transported to distributors and retailers in refrigerated trucks to maintain its quality and freshness. Throughout the entire process, our team follows strict protocols and quality control measures to ensure that our organic milk meets regulatory requirements and our own high standards for quality and safety.`,
                // Any special handling requirements.
                'transportation': `To transport organic milk in compliance with all the necessary requirements, we use a dedicated refrigerated vehicle that is thoroughly cleaned and sanitized before and after each use.The vehicle is equipped with temperature control systems to ensure the milk is transported at the correct temperature range.The milk is loaded into the vehicle separately from non - organic products to prevent contamination.The organic milk is accompanied by proper documentation, including a certificate of organic compliance and a bill of lading, to verify its organic status and ensure traceability.The driver of the vehicle would be trained in the safe handling and transportation of organic milk and would comply with all federal and state regulations governing the transportation of organic products.The organic milk is delivered to its destination in a timely manner, ensuring its freshness and quality.`,
                'storageDetails': `Transpareat follows strict guidelines for storing organic milk to maintain its quality and freshness. Upon receiving organic milk, it is immediately transferred to a temperature - controlled storage room set to a temperature of 40°F or below. The storage room is regularly inspected to ensure it is clean, dry, and free from any odors that could affect the flavor of the milk. The organic milk is kept in its original packaging and is clearly labeled with the expiration date. The milk is rotated on a first-in, first-out basis to ensure that the oldest milk is used first. Additionally, Transpareat periodically checks the temperature of the storage room to ensure it remains at the correct temperature range. These measures help ensure that the organic milk remains safe, fresh, and of the highest quality when delivered to customers.`,
                'reviews': [
                        { 'name': 'Aarav Gupta', 'rating': 4, 'review': 'I have been drinking organic milk for a few months now, and I can definitely taste the difference. It has a creamier texture and a richer flavor than regular milk. Plus, I appreciate that it comes from cows that are treated ethically and without hormones.', 'profile': 'https://xsgames.co/randomusers/assets/avatars/male/41.jpg', 'created_at': 1680974337 },
                        { 'name': 'Rajiv Shah', 'rating': 3, 'review': 'I have always been conscious of what I put in my body, and organic milk is a staple in my diet. The milk has a fresher taste and I can trust that it is free from harmful chemicals and additives.', 'profile': 'https://xsgames.co/randomusers/assets/avatars/male/42.jpg', 'created_at': 1680628737 },
                        { 'name': 'Nalini Desai', 'rating': 5, 'review': 'I tried organic milk for the first time last week and was surprised by how delicious it tasted. The milk is rich and creamy, and I feel good knowing that it comes from cows that are treated humanely and fed an organic diet.', 'profile': 'https://xsgames.co/randomusers/assets/avatars/female/41.jpg', 'created_at': 1680887937 },
                        { 'name': 'Kavya Joshi', 'rating': 4, 'review': `As someone who is lactose intolerant, organic milk has been a game-changer for me. It is easier for me to digest and doesn't cause any discomfort. Plus, it tastes great!`, 'profile': 'https://xsgames.co/randomusers/assets/avatars/female/42.jpg', 'created_at': 1680715197 },
                        { 'name': 'Ishan Sharma', 'rating': 3, 'review': 'I have been a fan of organic milk for years now. It is a healthier option that supports sustainable farming practices. I can taste the difference in quality and always feel good about purchasing it.', 'profile': 'https://xsgames.co/randomusers/assets/avatars/male/11.jpg', 'created_at': 1681060799 },
                        { 'name': 'Dev Singh', 'rating': 4, 'review': 'Organic milk is a staple in my household. It is free from antibiotics and artificial hormones, making it a healthier option for my family. Plus, it tastes delicious and adds a creamy texture to my morning coffee.', 'profile': 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg', 'created_at': 1678382399 },
                        { 'name': 'Anika Patel', 'rating': 4, 'review': `I recently switched to organic milk and I'm so glad I did.The milk tastes fresher and richer than regular milk, and I feel good knowing that it is free from harmful chemicals and preservatives.It's a small change that makes a big difference.`, 'profile': 'https://xsgames.co/randomusers/assets/avatars/female/31.jpg', 'created_at': 1675963199 },
                ],
                'recommendations': '',
                'frequently-bought-together': '',
        })
})