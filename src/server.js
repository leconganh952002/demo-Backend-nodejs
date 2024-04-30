const express = require('express');
require('dotenv').config()
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
//get the client
const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use('/', webRoutes);

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default port: 3306
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});

// simple query 
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>results= ", results);
        console.log(">>>fields= ", fields);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})