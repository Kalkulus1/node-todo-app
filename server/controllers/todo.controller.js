const mongoose = require('mongoose');
const Todo = require('../models/todo.model');

//create new todo
export function createTodo(req, res) {
    const todo = new Todo({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
    });

    return todo
        .save()
        .then((newTodo) => {
            return res.status(201).json({
                success: true,
                message: 'New todo created successfully',
                Todo: newTodo,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

//Get all Todos
export function getAllTodo(req,res){
    Todo.find()
        .select('_id title description')
        .then((allTodo) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all todos',
                Todo: allTodo,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Server error. Please try again",
                error: err.message,
            });
        });
}

//get single todo
export function getSingleTodo(req, res) {
    const id = req.params.causeId;
    Cause.findById(id)
        .then((singleTodo) => {
            res.status(200).json({
                success: true,
                message: `More on ${singleTodo.title}`,
                Todo: singleTodo,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success:false,
                message: 'This todo does not exist.',
                error: err.message,
            });
        });
}

//update a todo
export function updateTodo(req,res) {
    const id = req.params.todoId;
    const updateObject = req.body;
    Todo.update({ _id:id }, { $set:updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Todo is updated.',
                updateTodo: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
}

//delete a todo
export function deleteTodo(req, res) {
    const id = req.params.todoId;
    Todo.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(200).json({
            success: true,
            message: `A Todo was deleted with id: ${id}`,
        }))
        .catch((err) => res.status(500).json({
            success: false,
        }));
}
