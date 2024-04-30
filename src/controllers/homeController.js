const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getHello = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>>email = ", email, "name = ", name, "city = ", city)

    // connection.query(
    //     ` INSERT INTO
    //     Users(email, name, city)
    //     VALUES(?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('create user successfully !')
    //     }
    // );

    let [results, fields] = await connection.query(
        ` INSERT INTO Users(email, name, city) VALUES(?, ?, ?) `, [email, name, city]
    );

    console.log(">>>results= ", results);
    res.send('create user successfully !')

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage, getABC, getHello,
    postCreateUser, getCreatePage
}