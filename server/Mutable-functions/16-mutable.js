const products = 
[
    {
        title: 'Pizza',
        price: 121,
        id: '🍕',
    },
    {
        title: 'Burger',
        price: 121,
        id: '🍔',
    },
    {
        title: 'Hot cakes',
        price: 121,
        id: '🥞',
    },
];
const myProducts = [];
let newProducts = [];
// console.log('products', products);
// console.log('myProducts', myProducts);
// console.log('-'.repeat(50));

let productIndex = products.findIndex(({id}) => id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    newProducts = products.filter(({id}) => id !== '🍔');
}
console.log({products, newProducts, myProducts});

// Update

const productsV2 = 
[
    {
        title: 'Pizza',
        price: 121,
        id: '🍕',
    },
    {
        title: 'Burger',
        price: 121,
        id: '🍔',
    },
    {
        title: 'Hot cakes',
        price: 121,
        id: '🥞',
    },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'Delicioso',
    },
}

productIndex = productsV2.findIndex(({id}) => id === update.id);
// productsV2[productIndex] = {
//     ...productsV2[productIndex],
//     ...update['changes'],
// }
console.log('productsV2', productsV2);

// Reto 2: Hacer una modificación como la de arriba, en update, sin modificar el array original.
const newArrayProductV2 = productsV2.map(addChanges(item));
// console.log({newArrayProductV2});

function addChanges (item) {
    let newItem = {...item};
    if (item['id'] === update['id']) {
        newItem = {
            ...item,
            ...update['changes']
        }
    }
    return newItem;
}
