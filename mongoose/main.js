const express = require('express');
const mongoose = require('mongoose');
const productModel = require('./product');
require('./config');
const app = express();
app.use(express.json());

app.post('/product', async (req, res) => {

    const getReq = req.body;
    const product = new productModel(getReq);
    const result = await product.save();

    console.log(getReq)
    res.send(result);



})
app.listen(5000, () => {
    console.log("server is running on port 5000");
})



