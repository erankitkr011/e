const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("."));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    if(req.body.username == "Ankit" && req.body.password == "123")
    res.send("true");
    else
    res.send("false");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});