const app = require('./src/app');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
});
