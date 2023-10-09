const taskControllers = require('../controllers/tasks')
const tasks = require('../models/student')
const router = require('express').Router()

//find all student
router.get('/', taskControllers.index)

//create or insert new student
router.post('/create', taskControllers.create)

//update student record 
router.get('/update/:id', taskControllers.edit)
router.put('/update/:id', taskControllers.update)

//delete a student record
router.delete('/delete/:id', taskControllers.delete)


module.exports= router