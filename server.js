// import the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const database = require('./config/database'); 
const methodOverride = require('method-override');
const homeRoute = require('./server/routes/index');
const mainRoutes = require('./server/routes/main');

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev'));
dotenv.config();

//set up mongoose
mongoose.connect(database.localUrl)
    .then(() =>{
        console.log('Connected to database');
    })
    .catch((error) =>{
        console.log('Error connecting to database');
    });
mongoose.Promise = global.Promise;

//set up routes
homeRoute(app);
app.use('/api', mainRoutes);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    // res.status(400).json({
    //     message: 'Welcome to ToDo App. See documentation for proper route.',
    // });
});

// set up port number
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Todo app is listening on port ${port}!`)
});