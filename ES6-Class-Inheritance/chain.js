/** access value, nested object optional chaining */

const users = [{ id: 1, name: 'abul', job: 'doctor' }];
// console.log(users[0].job);

const data = {
    count: 3000,
    data: [
        { id: 1, name: 'babul', job: '' },
        { id: 2, name: 'mabul', job: '' },
    ],
};

const secJob = data.data[1].name;
// console.log(secJob);
// console.log(data.data[1]);

const user = {
    id: 19001,
    name: 'Watson',
    address: {
        street: {
            first: '32/A kochuakhet lane',
            sec: 'Third floor',
        },
        postOffice: 'Cantonment',
        city: "Khulna",
    },
};
// const userData = user.address.stret?.sec;
const userData = user.address.stret?.sec;
console.log(userData);