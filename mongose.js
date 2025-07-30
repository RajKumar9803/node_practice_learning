const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/'; // MongoDB connection URL
const dbName = 'code-step-by-step'; // Database name
mongoose.connect(url + dbName);
const schema = new mongoose.Schema({
    name: String,
    age: Number
})
const collection = mongoose.model('node-tut', schema, 'node-tut');
// Collection name
const saveData = async () => {
    const data = new collection({
        name: 'John Doe...',
        age: 30
    });
    await data.save()
        .then(() => console.log('Data saved successfully'))
        .catch(err => console.error('Error saving data:', err))

}
//saveData();

//update data
const updateData = async () => {
    const data = await collection.updateOne({ name: "John Doe" }, { $set: { age: 31 } })
    console.log(data)
}
//updateData().then(() => console.log('Data updated successfully'))
//.catch(err => console.error('Error updating data:', err));

//delete data
const deleteData = async () => {
    const data = await collection.deleteOne({ name: "John Doe" })
    console.log(data)
}
deleteData();

