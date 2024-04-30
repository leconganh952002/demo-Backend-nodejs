
const getHomepage = (req, res) => {
    res.send('Hello Cong Anh !')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getHello = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHello
}