
const services=require('../services/authServices')
const authutils = require('../utils/authutils')

class AuthControllers{

    async handleLoginRequest(req,res,next){
        const {name,email,password}=req.body
        if(password!=undefined){
            try{
                const result=await services.handleLogin(name,email,password)
            if(result){
                return res.status(200).json({'username':result})
            }
            const err=new Error('Invalid inputs')
            err.statusCode=400
            err.status='fail'
            next(err)
            }
            catch(error){
                next(error)
            
            }

        }
        else{
            const error=new Error('Password is required')
            error.statusCode=400
            error.status='fail'
            next(error)
        }
    }

    async handleRegisterRequest(req,res,next){
        const{name,username,email,password}=req.body

        if(name!=undefined&&email!=undefined&&password!=undefined){
           
            try{
                const result=await services.handleRegister(name,username,email,password)
                if(result){
                  return res.status(200).json({'username':result})
                }
                const err=new Error('User already exists')
                err.statusCode=400
                err.status='fail'
                next(err)
            }
            catch(error){
                next(error)
            }
        }
        else{
            const error=new Error('Name, email and password are required')
            error.statusCode=400
            error.status='fail'
            next(error)
        }

    }

}
module.exports = new AuthControllers;