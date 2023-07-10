const mongoose = require("mongoose")

const allbannerSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    }
},  { timestamps: true })

module.exports = mongoose.model("allbanner", allbannerSchema);