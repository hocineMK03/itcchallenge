const mongoose=require('../config/db')

const Schema=mongoose.Schema;

const trainingProgramUserSchema=new Schema({

    userid:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    
    trainingprogramid:{
        type:Schema.Types.ObjectId,
        ref:'TrainingProgram',
        required:true
    },
   



})

module.exports=mongoose.model('TrainingProgramUser',trainingProgramUserSchema)