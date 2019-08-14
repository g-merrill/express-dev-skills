const skills = [
    {
        name: 'JS',
        description: 'A programming language',
        level: '8',
        experience: '3 months'
    },
    {
        name: 'CSS',
        description: 'adds style',
        level: '4',
        experience: '4 months'
    },
    {
        name: 'HTML',
        description: 'adds structure',
        level: '7',
        experience: '5 months'
    },
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}