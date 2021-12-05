const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    const arrTodos = [...todos]

    res.render('index', {
        titleName: 'Todos list',
        isIndex: true,
        arrTodos // todo: не разбивается на состовляющие
    })

    console.log('Data',  Array.isArray(arrTodos))
})

router.get('/create', (req, res) => {
    res.render('create', {
        titleName: 'Create todo',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save()

    //res.redirect('/')
})


module.exports = router