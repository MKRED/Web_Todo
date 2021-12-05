const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000
const mongoUrl = 'mongodb+srv://kvach:vbifrdfx@cluster0.hevtz.mongodb.net/todos'

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect(mongoUrl, {
            //useNewUrlParser: true,
            //useFindAndModify: false,
            //usefindandmodify: false
        })
        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}...`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
