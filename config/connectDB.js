const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/checkpoint_mongoose')
        console.log("db successefuly connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB