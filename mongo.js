const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'code-step-by-step';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        //console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('node-tut');

        //console.log('Collection selected:', collection.collectionName);

        const count = await collection.countDocuments();
        console.log('Number of documents in collection:', count);
        return collection; // Return the count of documents in the collection



        // // Insert a document
        // const insertResult = await collection.insertOne({ name: 'Alice', age: 30 });
        // console.log('Inserted document:', insertResult.insertedId);

        // // Find a document
        // const findResult = await collection.findOne({ name: 'Alice' });
        // console.log('Found document:', findResult);

        // // Update a document
        // const updateResult = await collection.updateOne({ name: 'Alice' }, { $set: { age: 31 } });
        // console.log('Updated document count:', updateResult.modifiedCount);

        // // Delete a document
        // const deleteResult = await collection.deleteOne({ name: 'Alice' });
        // console.log('Deleted document count:', deleteResult.deletedCount);
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        //await client.close();
        console.log("finally")
    }
}
module.exports = run;
