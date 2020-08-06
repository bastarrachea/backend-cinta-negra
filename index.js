require('dotenv').config();
const {app, PORT} = require ('./server');
require('./database');

app.listen (PORT, (error)=> error ? console.error (erorr) : console.info(`Server on port ${PORT}`));