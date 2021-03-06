var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var app = express();
var PORT = 3000;

var User = require('./models/User.js');
mongoose.Promise = Promise;

var posts  = [
    {message:'Hello'},
    {message:'Hi'}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v');
        res.send(users);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.get('/profile/:id', async (req, res) =>{
    try{
        var user = await User.findById(req.params.id,'-pwd -__v');
        res.send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/register', (req, res) => {
   var userData = req.body;
   var user = new User(userData);
   
   user.save((err, result)=>{
       if(err) {
           console.log('saving user error');
       }
   });

   res.sendStatus(200);
})

app.post('/login', async (req, res) => {
   var userData = req.body;
   var user = await User.findOne({email:userData.email});
   if(!user)  
        return res.status(401).send({message:'Email or Pasword invalid'});
   if(userData.pwd != user.pwd)
        return res.status(401).send({message:'Email or Pasword invalid'});
        
    var payload = {};
    var token = jwt.encode(payload, '123');
    res.status(200).send({token});

});


mongoose.connect("mongodb://test:test@ds163595.mlab.com:63595/pssocial", {useMongoClient:true}, (err) => {
    if(!err) {
        console.log("connected to mongo");
    }
});
app.listen(PORT);
console.log(`App listening on port ${PORT}`);