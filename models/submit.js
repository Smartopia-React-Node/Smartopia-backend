const mongoose = require("mongoose")

const SubmitSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true,
    },
    lname : {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
    },
    priceModle: {
        type: String,
        require: true,
    },
    toolName: {
        type: String,
        require: true,
    },
    toolURL: {
        type: String,
        require: true,
    },
    toolImgURL:{
        type: String,
        default: ""
    },
    toolDesc: {
        type: String,
        require: true,
    },
    toolVideoURL: {
        type: String,
        default: ""
    },
    tagList: {
        type: Array,
        default: [],
    },
    toolExtraDesc: {
        type: String,
        default: ""
    }
},  { timestamps: true })

module.exports = mongoose.model("Submit", SubmitSchema);
