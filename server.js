const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//connect to database
connectDB();

//Route files
const menu = require('./routes/menu');

//devlogging middleware
if (process.env.Node_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/menu', menu);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
); 