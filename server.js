const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db')

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//connect to database
connectDB();

//Route files
const menu = require('./routes/menu');

//Body parser
app.use(express.json());

//devlogging middleware
if (process.env.Node_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/menu', menu);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bold.yellow)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close server & exit process
    server.close(() => process.exit(1));
});
