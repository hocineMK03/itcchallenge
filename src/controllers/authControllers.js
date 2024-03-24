
const services=require('../services/authServices')
const jwtauth=require('../middleware/jwtAuth')
class AuthControllers{

    async handleLoginRequest(req,res,next){
        const {email,password}=req.body
        if(password!=undefined){
            try{
                const result=await services.handleLogin(email,password)
            if(result){

                const accessToken=jwtauth.createAccessToken(email);
            const refreshToken=jwtauth.createRefreshToken(email);
            res.cookie('access_token', accessToken, { maxAge:30*60*1000 });
  res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge:24*60*60*1000});
            console.log(accessToken,refreshToken)
                return res.status(200).json('login successful')
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
        const{username,email,password}=req.body

        if(email!=undefined&&password!=undefined){
           
            try{
                const result=await services.handleRegister(username,email,password)
                if(result){
                    const accessToken=jwtauth.createAccessToken(email);
                    const refreshToken=jwtauth.createRefreshToken(email);
                    res.cookie('access_token', accessToken, { httpOnly: true ,maxAge:4*60*1000 });
          res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge:24*60*60*1000});
                    console.log(accessToken,refreshToken)
                        return res.status(200).json('register successful')
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

        async handleGetPermissions(req,res,next){
            console.log("here")
            console.log(req.user.user)
            try{
                const result=await services.checkPermesssion(req.user.user)
                console.log(result)
                if(result){
                    return res.status(200).json(result)
                }
                const err=new Error('No permissions found')
                err.statusCode=404
                err.status='not found'
                next(err)
            }
            catch(error){
                next(error)
            }
        }
}
module.exports = new AuthControllers;