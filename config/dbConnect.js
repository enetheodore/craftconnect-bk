const mongoose = require('mongoose');

//this function connects to the MongoDB database
const dbConnect = async () => {
    console.log("mongo uri", process.env.MONGODB_URI);
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

module.exports = dbConnect;
