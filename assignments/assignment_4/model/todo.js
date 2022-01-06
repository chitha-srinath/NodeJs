const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoschema = new schema ({
    todoname : String,
    taskstatus: Boolean
});

const Todo = mongoose.model("Todo",todoschema );

module.exports = Todo;