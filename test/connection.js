const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/mamaSauce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//element.on('click', function(){})


mongoose.connection.once('open', function () {
    console.log('Connection has been made, now make fireworks...')
}).on('error', function (error) {
    console.log('Connection error:', error);
});