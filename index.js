const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'code-step-by-step';
const client = new MongoClient(url);
client.connect()
    .then(() => {
        console.log('Connected to MongoDB...');
        const db = client.db(dbName);
        return db.collection('node-tut').insertMany([
            { name: 'Raj kumar', age: 30 },
            { name: 'Ravi kumar', age: 25 },
            { name: 'kaushal kumar', age: 20 }
        ]);
    })
    .then(users => {
        console.log('node-tut', users);
    })
    .catch(err => {
        console.error('Error connecting to MongoDB: error console', err);
    })
    .finally(() => {
        //client.close();
        console.log('Connection closed');
    })
    ;    
