
const Cookies=require('js-cookie')


class ProductsAPI {
  
    constructor() {
        this.url = "http://127.0.0.1:5000/api/training";
    }
    handleDisplayProductsByCategory = async (category) => {
        try {
            const response = await fetch(`${this.url}/displaytrainings?category=${category}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            throw error;
        }


    }
    handleDisplayProducts = async () => {

        try {
            const response = await fetch(`${this.url}/displaytrainings`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            throw error;
        }

    }

    handlecreateProduct = async (data) => {

        try {
            const response = await fetch(`${this.url}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            throw error;
        }

    }

    handleProductByName = async (name) => {

        try{
            const response = await fetch(`${this.url}/displaytrainings?Name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            }
            else {
                return false;
            }
        }
        catch(error){
            console.error('Error during login:', error);
            throw error;
        }
    }
    handleCreateProduct=async(data)=>{
        try{
            const token=Cookies.get('access_token')
            const body=data
            const response = await fetch(`${this.url}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':`${token}`
                },
                credentials: 'include',
                body: JSON.stringify(body)
            });
            if (response.ok) {
                const responseData = await response.json();
return true;
            }
            else {
                return false;
            }
        }
        catch(error){
            console.error('Error during login:', error);
            throw error;
        }

    }
}

module.exports = new ProductsAPI;