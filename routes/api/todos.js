const express = require('express');

const router = express.Router();

const Todo = require('../../models/Todo');

// @route GET api/todos
// @description get all todos
// @access public
router.get('/', (req, res, next) => {
    Todo.find()
        .sort({ date: -1 })
        .then(todos => {
        res.json(todos)
    })
    // res.send({type: 'GET'});
});

// @route POST api/todos
// @description create todo
// @access public
router.post('/', (req, res, next) => {
    Todo.create(req.body)
        .then(todo => {
            res.json(todo);
        });
});

// @route DELETE api/todos/:id
// @description delete todo
// @access public
router.delete('/:id', (req, res, next) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(todo => {
            res.json({ success: true });
        })
        .catch(err => {
            res.status(404).json({ success: false });
        });
});

module.exports = router;