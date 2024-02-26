const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const Person = require('./models/Person');

app.get('/', function (req, res){
    res.send('Welcome to my hotel... How can I help you ?')
})

app.get('/rice',(req,res)=>{
    res.send('sure sir, I would love to serve rice')
})

app.get('/idli',(req,res)=>{
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false 
    }
    res.send(customized_idli)
})

app.post('/person',(req,res)=>{
    let person = new Person(req.body);
    person.save()
    .then(() => {
        res.send('Data is saved');
    }) 
    .catch((err) => {
        res.status(500).send('Server error');
    });
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})