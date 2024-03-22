


class ProductsAPI {
  
    constructor() {
        this.url = "http://127.0.0.1:5000/api/training";
    }

    handleDisplayProducts = async () => {

        try {
            const response = await fetch(this.url, {
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
}

module.exports = new ProductsAPI;