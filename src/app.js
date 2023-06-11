const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const tasksRoutes = require('./routes/tasks');


const app = express();
const path = require("path")
app.use(express.static(__dirname + '/public'))

app.set('port', 5000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('src'))
app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');


app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'n'
}, 'single'));

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.use('/', tasksRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

const bodyparser = require("body-parser")
const encoder = bodyparser.urlencoded();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/css", express.static("css"));
app.use("/img", express.static("img"));
app.use("/js", express.static("js"));

const connecttion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "nodejs",
});
//connect to the database
connecttion.connect(function(error) {
        if (error) throw error
        else console.log("connct to the database secssefuly !!")

    })
    //register
connecttion.connect(function() {
    app.post("/register", encoder, function(req, res) {
        var username = req.body.username;
        var usermail = req.body.usermail;
        var password = req.body.password;
        var sql = "INSERT INTO test1 (username ,usermail, password) VALUES ?";
        var values = [
            [username, usermail, password]
        ]
        connecttion.query(sql, [values], function(error, result) {
            if (error) {
                res.redirect("/")
            } else {

                res.redirect("tasks")
            }
        });
    });
});
//login
app.post("/", encoder, function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    connecttion.query("select * from test1 where usermail = ? and password = ?", [username, password], function(error, results, feilds) {
        if (results.length > 0) {
            res.redirect("tasks")
        } else {
            res.redirect("/")
        }
        res.send();
    })
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.hbs")
})
app.get("/crud", function(req, res) {
    res.sendFile(__dirname + "/crud.hbs")
})