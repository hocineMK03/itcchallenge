const mongoose = require('../config/db')
const Schema = mongoose.Schema;


const userSchema = new Schema({

    
    username:{
        type: String,
        
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
    isadmin:{
        type:Boolean,
        default:false
    
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }

})

module.exports=mongoose.model('User',userSchema)