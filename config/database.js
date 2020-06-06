const dotenv = require('dotenv');
dotenv.config()

module.exports = {
    remoteUrl : 'mongodb+srv://kalkulus:PASSWORD@kalkulus-mcmhv.mongodb.net/DBNAME?retryWrites=true&w=majority',
    localUrl: process.env.MONGODBURL
    //localUrl: 'mongodb://localhost/todo-app'
};
