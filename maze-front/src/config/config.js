const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, `${process.env.NODE_ENV}.env`)});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3001,
    
    BACKEND_HOST: process.env.FRONTEND_HOST || 'localhost',
    BACKEND_PORT: process.env.FRONTEND_PORT || 3000
};