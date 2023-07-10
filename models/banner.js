const mongoose = require("mongoose")

const bannerSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    }
},  { timestamps: true })

module.exports = mongoose.model("Banner", bannerSchema);