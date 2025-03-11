const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/craft-connect', { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

module.exports = dbConnect;
