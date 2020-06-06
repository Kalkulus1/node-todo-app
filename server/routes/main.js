const express = require('express');
const {createTodo, getAllTodo, getSingleTodo, updateTodo, deleteTodo} = require('../controllers/todo.controller');
//import { createTodo, getAllTodo, getSingleTodo, updateTodo } from '../controllers/todo.controller';

const router = express.Router();

router.post('/todo', createTodo);
router.get('/todo', getAllTodo);
router.get('/todo/:todoId', getSingleTodo);
router.patch('/todo/:todoId', updateTodo);
router.delete('/todo/:todoId', deleteTodo);

