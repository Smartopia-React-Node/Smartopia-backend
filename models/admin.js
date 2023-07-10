const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    fname: {
        type: String,
        default: ""
    },
    lname: {
        type: String,
        default: ""
    },
    phoneNum: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        default: ""
    }
},  { timestamps: true })

module.exports = mongoose.model("Admins", AdminSchema);
