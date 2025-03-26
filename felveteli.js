const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();  

app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    port:3306,
    password:"",
    database:"felveteli"
});

app.get("/", (req, res) => {
    res.send("A szerver működik.")
})

app.get("/jelentkezesek", (req, res) => {
    db.query("SELECT * FROM jelentkezesek", (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });

});

app.listen(3000, () => {
    console.log("A felveteli szerver a 3000-es porton fut.")
})