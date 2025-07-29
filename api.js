const express = require('express');
const mongodb = require('mongodb');
const app = express();
const run = require('./mongo');
//for accepting json data from post mehtod
app.use(express.json());

app.get('/', async (req, res) => {
    const collection = await run();
    const getInnerData = await collection.find().toArray();
    console.log(getInnerData);
    // console.log('Collection:', collection);
    res.send({ getInnerData });
});
app.post('/', async (req, res) => {
    const collection = await run();
    console.log(req.body)
    const insertResult = await collection.insertOne(req.body);
    res.json(insertResult);

    //res.send(req)




});
//put method
app.put('/:name', async (req, res) => {
    console.log(req.params.name);
    const updateData = req.body;
    const paramsName = req.params.name;
    let result = await run();
    let updateResult = await result.updateOne({ name: paramsName }, { $set: updateData })
    res.send(updateResult);
})
//delete method
app.delete('/:id', async (req, res) => {
    if (req.params.id) {
        const collection = await run();
        const deleteResult = await collection.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
        if (deleteResult.deletedCount === 1) {
            res.send({ message: 'Document deleted successfully' });
        } else {
            res.status(404).send({ message: 'Document not found' });
        }
    }


})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})
