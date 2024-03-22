const mongoose = require('../config/db')
const Schema = mongoose.Schema;


const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        default:function(){
            return this.name
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }

})

module.exports=mongoose.model('User',userSchema)