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