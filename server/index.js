const express = require('express')
const app = express()

//sample run
app.get("/", (req, res) => {
    res.send("fuck this class!");
});

app.listen(3001, () => {
    console.log("running on port 3001");
});