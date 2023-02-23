// JSON - JAVASCRIPT OBJECT NOTATION

const user = { id: 1, name: 'Gorib Masum', job: 'actor' };

const stringfied = JSON.stringify(user);
// console.log(user);        // { id: 1, name: 'Gorib Masum', job: 'actor' } --JS
// console.log(stringfied);  // {"id":1,"name":"Gorib Masum","job":"actor"} -- JSON String


const shop = {
    owner: 'Malia',
    address: {
        street: 'PCZONE',
        city: 'Khocukhet',
        country: 'BD',
    },
    products: ['laptop', 'monitor', 'mouse', 'keboard'],
    revenue: 34000,
    isOpen: true,
    isNew: false,
};

// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);