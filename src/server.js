const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config red.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// khai bao routes
app.use('/', webRoutes);


//self running function js muc dich dinh nghia async await
(async () => {
    //test conection
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()
