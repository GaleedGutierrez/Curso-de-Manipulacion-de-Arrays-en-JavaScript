// Todos los miembros del equipo tiene que ser menores de 15 años.

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 15,
    },
];

const allUnder15 = team.every(({age}) => age < 15);

(allUnder15) 
    ? console.log('Team accepted.')
    : console.log('Team rejected.');
