/** 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// async
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    console.log(data);
} catch (error) {
    console.log(data);
}

// document.getElementById('abc');

// synchronous asynchronous
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3);
console.log(3);
console.log(3);
console.log(3);

*/


// ----------------
const person = [
    {
        name: "rahim",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim2",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim3",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
];

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];

const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
];

// const result = dreamGirl[0].sokina.contactInfo[1].instagram;
const result = phones.filter((phone) => phone.price !== 500);
console.log(result);