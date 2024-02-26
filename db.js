const mongoose = require('mongoose');
//define the mongodb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'//Replace 'mydatabase' with your database name

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Get the default connection 
//Mongoose maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',() => {
    console.log('connected to MongoDB server');
});

db.on('error',(err) => {
    console.error('MongoDB connection error:',err);
});

db.on('disconnected',() => {
    console.log('MongoDB disconnected');
});

//export the database connection 
module.exports = db;



