const Fruits = require('../model/fruit')

module.exports = {
    index,
    create,
}

function index(req, res) {
res.render('../views/index', {
    Fruits: Fruits.getAll()
})}

function create(req, res) {
    req.body.notDone = false;
    Fruits.create(req.body);
    res.redirect('/fruits')
}