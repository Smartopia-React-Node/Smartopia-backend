const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    
    categoryName: {
        type: String,
        default: ""
    },
    categoryType:{
        type: String,
        default:""
    }
    
},  { timestamps: true })

module.exports = mongoose.model("Category", CategorySchema);
