const express = require('express');
const dotenv = require('dotenv');

//Route files
const madamesauce = require('./routes/madame_sauce');

//load env vars
dotenv.config({ path: './config.env' });

const app = express();

//Mount routers
app.use('/api/madamesauce', madamesauce);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
); 