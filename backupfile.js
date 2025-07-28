// const express = require('express');
// const app = express();
// const path = require('path');
// // const fs = require('fs');
// // const path = require('path');

// // let filepath = path.join(__dirname, 'newfile',);

// // if (fs.existsSync(filepath)) {
// //     console.log("already existes")
// // } else {
// //     fs.mkdirSync(filepath);

// // }
// // const file_Path = path.join(filepath, 'apple.txt');

// // fs.writeFileSync(file_Path, "this is kashmiri apple", 'utf-8')

// // const read_file = fs.readFileSync(file_Path, 'utf-8');
// // fs.renameSync(file_Path, path.join(filepath, 'kashmit.txt'))

// // fs.appendFileSync(path.join(filepath, 'kashmit.txt'), " this is updated text", 'utf-8')

// // fs.unlinkSync(path.join(filepath, "kashmit.txt"));

// let getting_Path = path.join(__dirname, 'newfile')

// app.get("/", (req, res) => {
//     res.send("testing with file")
// });

// app.use((req, res) => {
//     console.log("Matched 404");
//     res.status(404).send("404: kha aa gye be 🤨");
// });



// // app.listen(2000);
// const { name } = require('ejs');
// const express = require('express');
// const app = express();
// const port = 3000;
// app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//     const user = [{ title: 'Home Page', name: 'Raaz Example' }];
//     res.render('index', { user });

// })
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express');
// const middle_ware = require('./middlewate');
// const app = express();
// const route = express.Router();
// const port = 3000;
// //now larning middleware;

// // Middleware function


// //route.use(middle_ware)


// route.get('', (req, res) => {
//     res.send('Hello World!');
// });

// route.get('/about', (req, res) => {
//     res.send('Hello about !');
// });

// app.get('/user', (req, res) => {
//     res.send('Hello user!');
// });
// app.get('/help', (req, res) => {
//     res.send('Hello help!');
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

// app.use('', middle_ware);

//mongo connect
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'code-step-by-step';
// const client = new MongoClient(url);
// client.connect()
//     .then(() => {
//         console.log('mongodb connected');
//         const db = client.db(dbName);
//         const collection = db.collection('node-tut');
//         // Now access and print data from 'users' collection
//         return collection.find({}).toArray();

//     })
//     .then(users => {
//         console.log("database collection data" + JSON.stringify(users))

//     })
//     .catch(err => {
//         console.log("facing some issue while connecting to mongodb");
//     })
