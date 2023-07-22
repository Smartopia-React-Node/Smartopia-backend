const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user")
const Tool = require("../models/tool");

//ALL User
router.get("/all", async (req, res)=>{
   try{
      const users = await User.find();
      res.status(200).json(users);
   }catch(err) {
      console.log(err);
   }
}); 

//isAdmin User

router.get("/admin", async (req, res) => {
   try {
      const isAdmin = req.query.isAdmin;
      const filters={isAdmin: "true"}
     const users = await User.find(filters); // Apply the filters to the find() method
 
     res.status(200).json({users});
   } catch (err) {
     res.status(500).json(err);
   }
 });
 //saved videos
router.get("/save/:id", async (req, res) => {
  try {
    //  const {select}= req.query;
    const users = await User.findById(req.params.id).select("saveProduct");
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

 //all saved videos
router.get("/allsave", async (req, res) => {
  try {
    //  const {select}= req.query;
    const users = await User.find(req.query).select("saveProduct");
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

//save videos
 router.post("/saveProducts/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { saveProduct } = req.body;
    const user = await User.findByIdAndUpdate(userId, {
      $push: { saveProduct },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});


 //unsave videos
router.delete("/unsave/:id", async(req,res)=>{
  try{
    const userId = req.params.id;
    const { saveProduct } = req.body;

    // Find the user by ID and remove the specified saveProduct from the array
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { saveProduct: saveProduct } },
      { new: true }
    )
    res.json(user);
  }catch(err){
    res.status(400).json(err);
  }
})
//Delete USER
router.delete("/delete/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      await user.deleteOne();
      res.status(200).json("the user has been deleted");
   } catch (err) {
     res.status(500).json(err);
   }
 });

// LIKE
router.put("/like/:id", async (req, res) => {
   const UserID = req.params.id;
   const toolID = req.body.toolID;
   try {
      const result = await User.findByIdAndUpdate(UserID, {$addToSet:{likedProduct:toolID}}, {new: true});
      console.log(result);
      res.status(200).send(result);
   } catch (error) {
      console.log(error);
   }
});

// UNLIKE
router.put("/unlike/:id", async (req, res) => {
   const UserID = req.params.id;
   const toolID = req.body.toolID;
   try {
      const result = await User.findByIdAndUpdate(UserID, {$pull:{likedProduct:toolID}}, {new: true});
      console.log(result);
      res.status(200).send(result);
   } catch (error) {
      console.log(error);
   }
});

// GET ALL LIKE
router.get("/like/all/:id", async(req, res) => {
   const UserID = req.params.id;
   try{
      const result = await User.findOne({_id:UserID}, {likedProduct:1, _id:0});
      console.log(result);
      res.status(200).send(result);
   }
   catch (err){
      console.log(err);
   }
});


// // GET all custom tools for a user
// router.get("/:id/customTools", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const user = await User.findById(userId).populate("customTool.toolId", "fname toolName priceModel");
//     if (!user) {
//       return res.json([]); 
//     }
//     const customTools = user.customTool.map((customTool) => {
//       return {
//         id: customTool.toolId._id.toString(),
//         fname: customTool.fname,
//         toolName: customTool.toolId.toolName,
//         priceModel: customTool.toolId.priceModel,
//       };
//     });
//     res.json(customTools);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ error: err.message });
//   }
// });



// // POST a new custom tool for a user
// router.post("/:id/customTools", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const newCustomTool = {
//       fname: req.body.fname,
//       toolName: req.body.toolName,
//       priceModel: req.body.priceModel,
//     };

//     const createdTool = await Tool.create(newCustomTool);

//     const customTool = {
//       toolId: createdTool._id,
//       fname: req.body.fname,            // Include the fname field
//       toolName: req.body.toolName,
//       priceModel: req.body.priceModel,
//     };

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $push: { customTool: customTool } },
//       { new: true }
//     );

//     const updatedCustomTools = updatedUser.customTool.map((customTool) => {
//       return {
//         id: customTool.toolId.toString(),
//         fname: customTool.fname,         // Include the fname field
//         toolName: customTool.toolName,
//         priceModel: customTool.priceModel,
//       };
//     });

//     res.status(201).json(updatedCustomTools);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ error: "Failed to create custom tool" });
//   }
// });



// // DELETE a custom tool for a user
// router.delete("/customTools/:id", (req, res) => {
//   const userId = req.params.id;
//   const customToolId = req.body.customToolId; 
//   User.findByIdAndUpdate(
//     userId,
//     { $pull: { customTool: { _id: customToolId } } }, 
//     { new: true }
//   )
//     .then((updatedUser) => {
//       res.json(updatedUser.customTool);
//     })
//     .catch((err) => res.status(400).json({ error: err.message }));
// });

// GET customCollection by collectionName
router.get("/customCollections/:collectionName", async (req, res) => {
  const { collectionName } = req.params;

  try {
    const user = await User.findOne({ "customCollection.collectionName": collectionName });
    if (!user) {
      return res.status(404).json({ message: "Custom collection not found" });
    }
    
    const customCollection = user.customCollection.find(item => item.collectionName === collectionName);
    return res.status(200).json(customCollection);
  } catch (err) {
    console.error("Error fetching custom collection:", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.post("/customCollections/:userId", async (req, res) => {
  const { collectionName, saveTools } = req.body;
  const { userId } = req.params;

  try {
    const existingCollection = await User.findOne({ _id: userId, "customCollection.collectionName": collectionName });
    if (existingCollection) {
      return res.status(400).json({ message: "Collection with this name already exists for the user" });
    }
    const newCustomCollection = { collectionName, saveTools };
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.customCollection.push(newCustomCollection);
    await user.save();

    return res.status(201).json(newCustomCollection);
  } catch (err) {
    console.error("Error creating custom collection:", err);
    return res.status(500).json({ message: "Server Error" });
  }
});


//  //TOOL LIKE
// router.get("/:id/like", async (req, res) => {
//    try {
//       let likeNum=9;
//       const tool = await Tool.findById(req.params.id);
//       likeNum = tool.like+1 
//       await tool.updateOne({ $push: { likes: 7} });
//       res.status(200).json({l:tool.like});
//    } catch (err) {
//      res.status(500).json(err);
//    }
//  });

module.exports = router;