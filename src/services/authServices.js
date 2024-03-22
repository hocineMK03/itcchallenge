
const authutils=require('../utils/authutils')
const User=require('../models/User')
class Authservices{

    async handleLogin(name,email,password){
       
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
        else if(name!=undefined){
            const gethashedpassword=await User.findOne({name:name}).exec();
            if(gethashedpassword){
                const comparepassword=await authutils.compareHashedPasswords(password,gethashedpassword.password)
                if(comparepassword){
                    return gethashedpassword.username
                }
                throw new Error('Invalid  password')
            }
            throw new Error('Invalid name ')
        }
        else{
            throw new Error('Email or name is required')
        }
    }



    async handleRegister(name,username,email,password){
        if(!authutils.validatemail(email)){
            throw new Error('Invalid email')
        }
        const finalUsername = username || name;
        try{
            const hashedpassword=await authutils.hashpasswords(password)

            const duplicateUser = await User.findOne({ $or: [{ email: email }, { name: name }] }).exec();
            
            if(duplicateUser){
                throw new Error('User already exists')
            }

            const result=await User.create({
                name:name,
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
}
module.exports = new Authservices;