const elements = ['Fire', 'Air', 'Water'];
const separator = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index < elements.length - 1) {
        rtaFinal += element + separator;
    } else {
        rtaFinal += element;
    }
}
// console.log('for', rtaFinal);

const rta = elements.join('--');
// console.log('Join', rta);

const title = 'Curso de Manipulación de Arrays en JavaScript';
const urlFinal = title
    .split(' ')
    .join('-')
    .toLocaleLowerCase();
console.log(urlFinal);

