const jwt=require('jsonwebtoken');
require('dotenv').config();

class JWTAuth{
    createRefreshToken=(user)=>{
       
        const token=jwt.sign({user},process.env.REFRESH_JWT_SECRET,{expiresIn:'1d'});
        return token;

    }
    createAccessToken=(user)=>{
        

        const token=jwt.sign({user},process.env.ACCESS_JWT_SECRET,{expiresIn:'4h'});
        return token;
    }
     

}
module.exports=new JWTAuth