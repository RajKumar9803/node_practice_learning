const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/code-step-by-step';
mongoose.connect(url)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));

const schema = mongoose.Schema;

const userschema = new schema({ name: String });

const User = mongoose.model('node-tut', userschema, 'node-tut');

const newUser = new User({
    name: 'Static Raj'
});

newUser.save()
    .then(() => console.log('Static data saved'))
    .catch(err => console.log(err));


