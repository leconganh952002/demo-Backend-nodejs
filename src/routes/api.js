const express = require('express');
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadSMultipleFilesAPI
} = require('../controllers/apiController');

const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers,
    putUpdateCustomers, deleteACustomer, deleteArrayCustomer
} = require('../controllers/customerController');


routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadSMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.get('/info', (req, res) => {
    console.log(">>check query: ", req.query)
    return res.status(200).json({
        data: req.query
    })
});

module.exports = routerAPI; 