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
        skills: Skill.getAll()
    });
}

function addNewSkill(req, res) {
    res.render('skills/new');
}

function show(req, res) {
    let idx = Skill.getIdx(req.params.skill);
    res.render('skills/show', {
        skill: Skill.getOne(idx),
        partial: false
    });
}

function create(req, res) {
    let skills = Skill.getAll();
    skills.push(req.body);
    console.log(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill);
    res.redirect('/skills');
}