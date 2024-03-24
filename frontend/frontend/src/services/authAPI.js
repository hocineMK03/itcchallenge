const Cookies=require('js-cookie')


class AuthAPI{

    constructor(){
        this.url = "http://127.0.0.1:5000/api/auth";
    }

    async login(user){


       try{
        const body=user
        const response = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
        });
        if(response.ok){
            return true;
        }
        else{
            return false;
        }
       }
       catch(error){
           console.error('Error during displaytrainings:', error);
           throw error;
       }

    }

    async register(user){
        try{
            const body=user
        const response = await fetch(`${this.url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
        });
        if (response.status===200) {
            
            return true;
          } else {

            return false
          }
        }
        catch(error){
            console.error('Error during login:', error);
            throw error;
        }
    }


    async isperms(){
       const token=Cookies.get('access_token')
        try{
            const response = await fetch(`${this.url}/perms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${token}`
            },
            credentials: 'include',
        });

if (response.status===200) {
            
            return true;
          } else {

            return false
          }
        }
        
        catch(error){
            console.error('Error during perms:', error);
            throw error;
        }

    }
}
module.exports = new AuthAPI;