const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
   
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }
});

const Person = mongoose.model('Person', PersonSchema);

app.get('/',function (req,res){
    res.send('Welcome to my hotel... How can I help you ?')
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

module.exports = Person;