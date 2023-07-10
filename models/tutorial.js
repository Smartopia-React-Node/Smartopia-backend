const mongoose = require("mongoose")

const TutorialSchema = new mongoose.Schema({
    videoLink: {
        type: String,
        default: ""
    },
    videoType: {
        type: String,
        default: ""
    },
    videoDesc: {
        type: String,
        default: ""
    },
    videoId: {
        type: String,
        default: ""
    },
    thumbnail:{
        type: String,
        default: "" 
    },
    videoTitle:{
        type: String,
        default: ""
    },
    tagList:{
        type: Array,
        default: [String]
    }
},  { timestamps: true })

module.exports = mongoose.model("Tutorial", TutorialSchema);
