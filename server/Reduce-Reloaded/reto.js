function betweenNumbers(object, number) {
    if (1 <= number && number <= 5) object['1-5']++;
    if (6 <= number && number <= 8) object['6-8']++;
    if (9 <= number && number <= 10) object['9-10']++;
    
    return object;
}

const ramdom = () => Math.floor(Math.random() * 10) + 1;

const numbers = [];
const numberRange = {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
}

for (let index = 0; index <= 10; index++) {
    let ramdomNumber = ramdom();
    numbers.push(ramdomNumber);
}

const groupNumbers = numbers.reduce(betweenNumbers, numberRange);

console.log({numbers, groupNumbers});