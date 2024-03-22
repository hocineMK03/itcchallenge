const mongoose = require('../config/db')
const Schema = mongoose.Schema;

const trainingProgramSchema = new Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true

},
instructors:{
    type:String,
    required:true

},
duration:{
    type:String,
    required:true
},
schedule:{
    type:String,
    required:true

},
prerequisite:{
    type:String,
    required:true
},
fees:{
    type:String,
    required:true
},
format:{
    type:String,
    required:true

},
category:{
    type:String,
    required:true
},
dateCreated:{
    type:Date,
    default:Date.now
}

})

module.exports=mongoose.model('TrainingProgram',trainingProgramSchema)