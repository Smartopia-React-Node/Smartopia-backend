const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      default: "",
    },
    lname: {
      type: String,
      default: "",
    },
    phoneNum: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    mainAdmin: {
      type: Boolean,
      default: false,
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
    saveProduct: {
      type: Array,
      default: [],
    },
    likedProduct: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: "",
    },
    // customTool: {
    //   type: [
    //     {
    //       toolId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Tool",
    //         required: true,
    //       },
    //       fname: {
    //         type: String,
    //         required: true,
    //       },
    //       toolName: {
    //         type: String,
    //         required: true,
    //       },
    //       priceModel: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //   ],
    //   default: [],
    // },
    customCollection: {
      type: [
        {
          collectionName: {
            type: String,
            required: true,
            maxlength: 50,
          },
          saveTools: {
            type: Array,
            default: [],
          },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
