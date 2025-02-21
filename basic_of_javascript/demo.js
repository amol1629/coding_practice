const calls = [
    {
        name: "Jamie", num0fcalls: 7
    },
    {
        name: "Anna", num0fcalls: 2
    },
    {
        name: "Sam", num0fcalls: 3
    },
    {
        name: "Tony", num0fcalls: 8
    },
    {
        name: "Jamie", num0fcalls: 7
    },
    {
        name: "Anna", num0fcalls: 1
    },
    {
        name: "Sam", num0fcalls: 16
    },
    {
        name: "Tony", num0fcalls: 1
    },
    {
        name: "James", num0fcalls: 1
    }
];

const result = calls.reduce((acc, curr) => {
    const currentName = curr.name;

    if (acc[currentName]) {
        acc[currentName] += curr.num0fcalls
    } else {
        acc[currentName] = curr.num0fcalls
    }

    return acc;
}, {})

const sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]).map(([name, num0fcalls]) => ({ name, num0fcalls }));




console.log(sortedResult);