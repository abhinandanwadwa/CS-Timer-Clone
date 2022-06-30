import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

export default (mongoose.model('users', userSchema));