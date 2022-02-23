const words = ['spray', 'limit', 'elite', 'exuberant'];
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 1400,
        delivered: false,
    },
];

// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const item = words[index];
//     if (item.length >=  6) {
//         newArray.push(item);
//     }
// }

// console.log('newArray: ', newArray);
// console.log('words: ', words);

const rta = words.filter(item => item.length >= 6);

// console.log('words: ', words);
// console.log('rta: ', rta);

const rta2 = orders.filter(item => item.delivered && item.total >= 100);
// console.log('rta2: ', rta2);

// function search (query) {
//     return orders.filter(item => 
//             {
//                 return item.customerName.includes(query);
//             }
//         );
// }

const search = query => orders.filter(
    ({customerName}) => customerName.includes(query) 
);

console.log(search('V'));
