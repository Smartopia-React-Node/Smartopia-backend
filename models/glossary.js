const mongoose = require("mongoose");

const GlossarySchema = new mongoose.Schema(
  {
    term: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Glossary", GlossarySchema);
