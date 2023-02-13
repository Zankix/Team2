const express = require('express');
const bodParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bycrypt = require('bcrypt');

const db = require('./db');

const app = express();

app.use(bodParser.json());
app.use(bodParser.urlencoded({ extended: true}));
app.use(expressSession({ secret: 'mykey', resave:false, saveUninitialized:false}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser('mykey'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => {
    res.send('Server On Connection Successful');
});
app.post('/src/pages/components/Signupform', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const dob = req.body.dob;
    const address = req.body.address;
    const phonenumber = req.body.phonenumber;
    const username = req.body.username;
    const password = req.body.password;
    
    const query1 = "INSERT INTO `fit_db`.`user` (`firstname`, `lastname`, `email`, `dob`, `address`, `phonenumber`, `username`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const query2 = "SELECT * FROM user WHERE username = ?";
    
    db.query(query2, [username], (err, result) => {
        if(err) {throw err;}
        if(result.length > 0) {
            res.send({message: "Username already Exists"});
        }
        if(result.length === 0){
            const hashPassword = bycrypt.hashSync(password, 10);
            db.query(query1, [firstname, lastname, email, dob, address, phonenumber, username, hashPassword], (err, result) =>{
                if(err) {throw err;}
                res.send({message: "User Created"});
            });
        }
    });
})

app.listen(3001, () => {
    console.log('server started on port 3001');
});