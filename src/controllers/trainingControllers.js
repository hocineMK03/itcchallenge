
const services=require('../services/handletrainingServices');

class TrainignControllers{


    async handleJoinTrainingrequest(req,res,next){
const {trainingId}=req.body;

try{
  
    const result=await services.handleJointraining(trainingId,req.user.user);
    if(result){
       return res.status(200).json(result)
    }
    throw new Error('Could not join training program')

}
catch(err){
next(err)
}
    }
    async handleCreateTrainingRequest(req,res,next){

        const{title, description, instructors, duration, schedule, prerequisite, fees, format, category}=req.body;

        try{
            const result=await services.handleCreateTraining(req.user.user,title, description, instructors, duration, schedule, prerequisite, fees, format, category);
            if(result){
               return  res.status(200).json("success")
            }
            throw new Error('Could not create training program')
        }
        catch(err){
            next(err)
        }


    }

    async handleDisplayTrainingRequest(req,res,next){
            const { category } = req.query;
        if(category !=undefined){

            const result=await services.handleDisplayTrainingsByCategory(category);
            if(result){
                return res.status(200).json(result)
            }
            const err=new Error('No training programs found')
           err.statusCode=404
              err.status='not found'
            next(err)
        }
        else{
            console.log("hree")

            const result=await services.handleDisplayTrainings();
            if(result){
                console.log("hree")

               return res.status(200).json(result)
            }
            const err=new Error('No training programs found')
              err.statusCode=404
                  err.status='not found'
            next(err)
        }
    }



    async handleStopTrainingRequest(req,res,next){

        const {trainingId}=req.body;

try{
  
    const result=await services.handleStopTraining(trainingId,req.user.user);
    if(result){
       return res.status(200).json(result)
    }
    throw new Error('Could not join training program')

}
catch(err){
next(err)
}


    }
}


module.exports = new TrainignControllers;