const jwt=require('jsonwebtoken');
require('dotenv').config();

class JWTAuth{
    createRefreshToken=(user)=>{
        const name=user.name
        const token=jwt.sign({name},process.env.REFRESH_JWT_SECRET,{expiresIn:'1d'});
        return token;

    }
    createAccessToken=(user)=>{
        const name=user.name

        const token=jwt.sign({name},process.env.ACCESS_JWT_SECRET,{expiresIn:'4h'});
        return token;
    }
     

}
module.exports=new JWTAuth