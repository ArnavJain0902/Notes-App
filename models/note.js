const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model("note",noteSchema,"notes")