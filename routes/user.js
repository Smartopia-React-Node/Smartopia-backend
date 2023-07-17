const router = require("express").Router();
const User = require("../models/user")


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