const users = [
    {
        userID: 1,
        username: 'Tom',
        atributes: ['Nice', 'Cute'],
    },
    {
        userID: 2,
        username: 'Mike',
        atributes: ['Lovely'],
    },
    {
        userID: 3,
        username: 'Nico',
        atributes: ['Nice', 'Cool'],
    },
];

const rta = users.map(({
    atributes
}) => atributes).flat();
// console.log('map-flat' ,rta);

const rta2 = users.flatMap(({
    atributes
}) => atributes);
// console.log('flatMap' ,rta2);

// Array con solamante las fechas de inicio.
const calendars = 
{
    primaryCalendar: 
    [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],

    secondaryCalendar: 
    [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const startDatesAux = [];
for (const key in calendars) {
    startDatesAux.push(
        calendars[key].map(
            ({startDate}) => startDate
        )
    );
}
const startDates = startDatesAux.flat();
// console.log(startDates);

// Solución clase
const rta3 = Object.values(calendars)
    .flatMap(
        item => item.map(
            ({startDate}) => startDate
        )
    );
console.log(rta3);