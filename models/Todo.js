// const {Schema, model, models} = require('mongoose')
//
// const schema = new Schema({
//     title: { type: String, required: true },
//     completed: { type: Boolean, default: false }
// })
//
//
//
// module.exports = model('Todo', schema)


const mong = require('mongoose')



const schema = new mong.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
})



module.exports = mong.model('Todo', schema)