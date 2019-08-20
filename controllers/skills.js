const Skill = require('../models/skill');


module.exports = {
    index,
    new: addNewSkill,
    show,
    create,
    delete: deleteSkill
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'skills#index'
    });
}

function addNewSkill(req, res) {
    res.render('skills/new', { title: 'skills#new' });
}

function show(req, res) {
    let idx = Skill.getIdx(req.params.skill);
    let skill = Skill.getOne(idx);

    console.log(req.params.skill, skill);
    res.render('skills/show', {
        skill,
        partial: false,
        title: 'skills/show'
    });
}

function create(req, res) {
    let skills = Skill.getAll();
    console.log(req.body);
    skills.push(req.body);
    console.log(skills);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill);
    res.redirect('/skills');
}