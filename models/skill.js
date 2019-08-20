const skills = [
    {
        name: 'JS',
        description: 'a programming language',
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
    getAll,
    getIdx,
    getOne,
    deleteOne
};

function getAll() {
    return skills;
}

function getIdx(skillString) {
    return skills.findIndex(skill => {
        return skill.name === skillString;
    });
}

function getOne(id) {
    console.log(skills);
    return skills[id];
}

function deleteOne(skillName) {
    let delIdx = skills.findIndex(skill => {
        return skill.name === skillName;
    });
    console.log(delIdx);
    skills.splice(delIdx, 1);
}