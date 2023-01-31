const express = require('express');
const mysql = require("mysql");

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
//sample run
//type npm run devStart
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "fitt_database"
});

// unfinished code for registration portion
// app.post('/register', (req, res)=> {
//     db.query("INSERT INTO trainer (")
// })

//login backend handler
app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM trainer WHERE username = ? AND password = ? ", [username, password],
        (err, result) => {
            if (err){
                res.send({err: err})
            }
            if (result. length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username or password! Please try again"});
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running on port 3001");
});