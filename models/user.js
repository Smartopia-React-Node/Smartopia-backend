const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
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
    isAdmin: {
        type: Boolean,
        default: false
    },
    mainAdmin:{
        type: Boolean,
        default: false
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
    saveProduct:{
        type: Array,
        default: []
    },
    likedProduct:{
        type: Array,
        default: []
    },
    type:{
        type: String,
        default: ""
    }
},  { timestamps: true })

module.exports = mongoose.model("User", UserSchema);
