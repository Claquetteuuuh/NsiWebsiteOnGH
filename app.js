const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const User = require('./models/user')
const bcrypt = require('bcrypt');
const user = require('./models/user');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// middleware cors error (autorisation a tout ip d'envoyer une requete)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

//connection a la database mongoDb
const dBURI = 'mongodb+srv://Claquette:azerty123@cluster0.hdln3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dBURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log(err));

// EJS
app.set('views', './views')
// to user ejs as engine
app.set('view engine', 'ejs')
// to use the public folder
app.set('public engine', './public')
// to get files in directory
app.use("/public", express.static(__dirname + "/views/public"))

// routes
app.get('/', (req, res)=> res.render('home.ejs'));
app.get('/javascript', (req, res)=> res.render('js.ejs'))
app.get('/documentation', (req, res)=> res.render('docu.ejs'))
app.get('/login', (req, res )=> res.render('login.ejs'))
app.get('/register', (req, res )=> res.render('register.ejs'))

// root signup
app.post('/signup', (req, res, next)=>{
    console.log(req.body)
    bcrypt.hash(req.body.password, 10) //hashage du mdp avec bcrypt
        .then(hash => {
            //creation et sauvegard de l'utilisateur
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            user.save() 
                .then(()=> res.status(201).json({message : 'user enregistré !'}))
                .catch(error => res.status(400).json({error}))
        })
        .catch(error => res.status(500).json({error}))
})

// root login
app.post('/login', (req, res, next)=> {
    User.findOne({ email: req.body.email})
        .then( user =>{
            // verifier si l'user n'est pas dans la database
            if (!user){ 
                return res.status(401).json({error: 'user non trouvé'})
            }
            // si il est dans la database
            bcrypt.compare(req.body.password, user.password)
                .then(valid =>{
                    // verification du hash
                    if (!valid){ 
                        return res.status(401).json({ error :'mauvais mot de passe'})

                    }
                    // renvoyer l'id avec le token de connection
                    res.status(200).json({
                        userId: user._id,
                        token: 'TOKEN'
                    });
                    console.log('User '+ user.id + ' bien connecté !')
                })
                .catch(error => res.status(500).json({error}))
        })
        .catch(error => res.status(500).json({error}));
})