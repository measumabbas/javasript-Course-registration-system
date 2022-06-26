const mongoose = require('mongoose');

const UpdatedSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    registration:{
        type:String,
        required:true,
        unique:true
    }
})


module.exports = mongoose.model('Updated',UpdatedSchema);