const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕',
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔',
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭',
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞', 
    },
];


const numbers = [1, 30, 49, 29, 10, 13];
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break;
    }
}
// console.log('for', rta);

const rta2 = numbers.find(item => item === 30);
// console.log('find', rta2);

const rta3 = products.find(({id}) => id === '🍔')
// console.log('rta3', rta3);

const rta4 = products.findIndex(({id}) => id === '🍔')
console.log('rta4', rta4);