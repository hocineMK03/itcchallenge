
const authutils=require('../utils/authutils')
const User=require('../models/User')
class Authservices{

    async handleLogin(email,password){
        console.log(email,password)
        try{
            if(email!=undefined){
                const gethashedpassword=await User.findOne({email:email}).exec();
              
                if(gethashedpassword){
                    const comparepassword=await authutils.compareHashedPasswords(password,gethashedpassword.password)
                    if(comparepassword){
                        return gethashedpassword.username
                    }
                    throw new Error('Invalid  password')
                }
                throw new Error('Invalid email ')
            }
          
            else{
                throw new Error('Email or name is required')
            }
           
        }
        catch(error){
            throw new Error(error)
        }
    }



    async handleRegister(username,email,password){
        if(!authutils.validatemail(email)){
            throw new Error('Invalid email')
        }
        const finalUsername = username || "defaultuser";
        try{
            const hashedpassword=await authutils.hashpasswords(password)

            const duplicateUser = await User.findOne({email: email}).exec();
            
            if(duplicateUser){
                throw new Error('User already exists')
            }

            const result=await User.create({
                username:finalUsername,
                email:email,
                password:hashedpassword


            })
           if(result){
            console.log(result)
            return result.username
           }
           return null

        }
        catch(error){
            throw new Error(error)
        }
    }
    async checkPermesssion(email){
        console.log("email",email)
        try{
            const result=await User.findOne({email:email}).exec();
            if(result.isadmin){
                return result.username
            }
            throw Object.assign(new Error('User is not admin'),{statusCode:401})
        }
        catch(error){
            throw new Error(error)
        }

    }
}
module.exports = new Authservices;