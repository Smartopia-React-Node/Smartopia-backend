const mongoose = require("mongoose")

const ToolSchema = new mongoose.Schema({
    toolName: {
        type: String,
        require: true,
    },
    toolURL: {
        type: String,
        require: true,
    },
    toolDesc: {
        type: String,
        require: true,
    },
    toolVideoURL: {
        type: String,
        default: ""
    },
    toolImageURL: {
        type: String,
        default: ""
    },
    priceModle: {
        type: String,
        require: true,
    },
    tagList: {
        type: Array,
        default: [String],
    },
    toolExtraDesc: {
        type: String,
        default: ""
    },
    like: {
        type: Array,
        default: []
    }
},  { timestamps: true }) 

module.exports = mongoose.model("Tool", ToolSchema);
