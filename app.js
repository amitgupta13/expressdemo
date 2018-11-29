const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hi There, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res){
    
    const sounds = {
        dog:'woof',
        cat:'meow'
    };
    const animal = req.params.animal;
    res.send(`The ${animal} says '${sounds[animal]}'`);
});
app.get('/repeat/:message/:times', function(req, res){
    const message = req.params.message;
    const times = Number(req.params.times);
        result = '';
        for(let i =0; i<times; i++){
            result += message + " ";
        }

        res.send(result);
});

app.listen(3000,()=>{
    console.log(`Server Started on port 3000`)
});