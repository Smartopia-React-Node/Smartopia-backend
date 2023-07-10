const mongoose = require("mongoose")

const GlossarySchema = new mongoose.Schema({
    term: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    }
},  { timestamps: true })

module.exports = mongoose.model("Glossary", GlossarySchema);
