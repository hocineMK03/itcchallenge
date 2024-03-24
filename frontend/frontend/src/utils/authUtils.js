const Cookies = require('js-cookie');

class AuthUtils {
    isAuthenticated() {
        const sessionToken = Cookies.get('access_token');
        console.log("sessionToken", sessionToken);
        if (sessionToken) {
            return true;
        }
        return false;
    }
}

module.exports = new AuthUtils;
