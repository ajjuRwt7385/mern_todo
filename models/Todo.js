const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        required: [true, 'Title is required'],
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;