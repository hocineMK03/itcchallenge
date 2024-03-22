const bcrypt = require('bcrypt');
class AuthUtils {
    async  hashpasswords(password){
        try {
        const hashedPassword = await bcrypt.hash(password, 4);
        
        return hashedPassword;
        } catch (error) {
        // throw new Error('Error hashing password');
        return null
        }
        }
    async compareHashedPasswords(password,storedHashedPassword){
       let testhash= await bcrypt.compare(password, storedHashedPassword);
       console.log("test",testhash)
       if(testhash){
        return true
       }
       return false
    }
    validatemail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }
    
   
}

module.exports = new AuthUtils;