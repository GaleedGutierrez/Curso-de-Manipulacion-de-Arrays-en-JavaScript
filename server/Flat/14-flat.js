const matriz = 
[
    [['a', 'b'],1, 2, 3],
    [4, 5, 6, [1, 2, [3, 4]]],
    [7, 8, 9, ['a', 'b']],
];


// const newArray = [];
// for (let i = 0; i < matriz.length; i++) {
//     const iElement = matriz[i];

//     for (let j = 0; j < iElement.length; j++) {
//         const jElement = iElement[j];
//         const isElementArray = Object.prototype.toString.call(iElement[j]) === '[object Array]';

//         if (isElementArray) {
//             for (let k = 0; k < jElement.length; k++) {
//                 const kElement = jElement[k];
//                 newArray.push(kElement);
//             }
//         } else {
//             newArray.push(jElement);
//         }

//     }
// }

function flatFunction (element) {
    let newArray = [];
    const isElementArray = Object.prototype.toString.call(element) === '[object Array]';
    if (!isElementArray) return element;  
    for (const item of element) {
        newArray = newArray.concat(flatFunction(item));
    }
    return newArray;
}

// console.log(flatFunction(matriz));

// console.log('for', newArray);
const rta = matriz.flat(3);
console.log('flat', rta);

