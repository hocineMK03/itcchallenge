

const trainingProgram= require('../models/TrainingProgram');
const User=require('../models/User');
const trainingprogramuser=require('../models/TrainingProgramUser');
class HandleTrainingServices {
    async handleCreateTraining(name, title, description, instructors, duration, schedule, prerequisite, fees, format, category) {
        try {
            const user = await User.findOne({ name: name }).exec();
            if(user.isadmin==false){

throw Object.assign(new Error('User not an admin'), { status: 401 })
            }
            if (user) { // Check if the user exists and is an admin
                const trainingProgramcreate = await trainingProgram.create({
                    title: title,
                    description: description,
                    instructors: instructors,
                    duration: duration,
                    schedule: schedule,
                    prerequisite: prerequisite,
                    fees: fees,
                    format: format,
                    category: category
                });
                if (trainingProgramcreate) {
                    console.log(trainingProgramcreate);
                    return trainingProgramcreate;
                }
                throw new Error('Error creating training program');

            }
            throw Object.assign(new Error('User not found'), { status: 404 });
            
        } catch (err) {
            throw new Error(err);
        }
    }
    
    async handleJointraining(trainingId, name) {
        try{

            
            const userID=await User.findOne({name:name}).exec();
            const checkifjoined=await trainingprogramuser.findOne({trainingprogramid:trainingId,userid:userID._id}).exec();

            if(checkifjoined){
                throw new Error('User already joined training program')
            }
            const training=await trainingProgram.findOne({_id:trainingId}).exec();
            if(userID && training){
                const trainingprogram= await trainingprogramuser.create({
                    userid:userID._id,
                    trainingprogramid:trainingId



                })
                if(trainingprogram){
                    console.log(trainingprogram)
                    return trainingprogram
                }
                throw Object.assign(new Error('Error joining training program'), { status: 500 })
            }
            throw Object.assign(new Error('user or training not found'), { status: 404 })
        }
        catch(err){
            console.log(err)
            throw new Error(err)
        }


    }

    async handleStopTraining(trainingId, name) {
        try{
            const userID=await User.findOne({name:name}).exec();
            const checkifjoined=await trainingprogramuser.findOne({trainingprogramid:trainingId,userid:userID._id}).exec();

            if(!checkifjoined){
                throw new Error('User isnt in this training program')
            }
            const training=await trainingProgram.findOne({_id:trainingId}).exec();
            if(userID && training){
                const trainingprogram= await trainingprogramuser.findOneAndDelete({
                    userid:userID._id,
                    trainingprogramid:trainingId
                })
                if(trainingprogram){
                    console.log(trainingprogram)
                    return trainingprogram
                }
                throw Object.assign(new Error('Error stopping training program'), { status: 500 })
            }
            throw Object.assign(new Error('user or training not found'), { status: 404 })
        }
        catch(err){
            throw new Error(err)
        }
    }
  async handleDisplayTrainings() {

    try{
        const trainings=await trainingProgram.find().exec();
    if(trainings){
        return trainings
    }
    throw Object.assign(new Error('No training programs found'), { status: 404 })
    }
    catch(err){
        throw new Error(err)
    }


  }
  async handleDisplayTrainingsByCategory(category) {

try{
    const trainings=await trainingProgram.find({category:category}).exec();
    if(trainings){
        return trainings
    }
    throw Object.assign(new Error('No training programs found'), { status: 404 })

}
catch(err){
    throw new Error(err)
}
  }

  async handleDisplayTrainingByName() {


  }
  

}


module.exports = new HandleTrainingServices;