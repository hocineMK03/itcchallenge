
const services=require('../services/authServices')
const jwtauth=require('../middleware/jwtAuth')
class AuthControllers{

    async handleLoginRequest(req,res,next){
        const {name,email,password}=req.body
        if(password!=undefined){
            try{
                const result=await services.handleLogin(name,email,password)
            if(result){

                const accessToken=jwtauth.createAccessToken(name);
            const refreshToken=jwtauth.createRefreshToken(name);
            res.cookie('access_token', accessToken, { httpOnly: true ,maxAge:4*60*1000 });
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
        const{name,username,email,password}=req.body

        if(name!=undefined&&email!=undefined&&password!=undefined){
           
            try{
                const result=await services.handleRegister(name,username,email,password)
                if(result){
                    const accessToken=jwtauth.createAccessToken(name);
                    const refreshToken=jwtauth.createRefreshToken(name);
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

}
module.exports = new AuthControllers;