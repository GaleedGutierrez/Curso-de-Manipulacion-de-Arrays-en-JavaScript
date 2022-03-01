const matriz = 
[
    [1, 2, 3],
    [4, 5, 6, [1, 2]],
    [7, 8, 9],
];


const newArray = [];
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

function flatFunction (array) {
    debugger
    let newArray = [];
    let aux = [];
    for (const item of array) {
        debugger
        const isElementArray = Object.prototype.toString.call(item) === '[object Array]';
        if (isElementArray) {
            aux = newArray.concat(flatFunction(item))
            newArray = [...aux];
        } else {
            return array
        }
    }
    return newArray;
}

console.log(flatFunction(matriz));

// console.log('for', newArray);