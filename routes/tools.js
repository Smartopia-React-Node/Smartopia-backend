const router = require("express").Router();
const Tool = require("../models/tool")


//Add TOOL
router.post("/addtool", async (req, res)=>{
   const newTool = new Tool(req.body);
   try{
      const tool = await newTool.save();
      res.status(200).json(tool);
   }catch(err) {
      console.log(err);
   }
});

//ALL TOOL
router.get("/alltool", async (req, res)=>{
   console.log("alltool");
   try{
      const tool = await Tool.find();
      res.status(200).json(tool);
   }catch(err) {
      console.log(err);
   }
}); 

// A Tool
router.get("/:id", async (req, res)=>{
   try{
      const tool = await Tool.findById(req.params.id);
      res.status(200).json(tool);
   }catch(err) {
      console.log(err);
   }
}); 


//Delete TOOL
router.delete("/delete/:id", async (req, res) => {
   try {
      const tool = await Tool.findById(req.params.id);
      await tool.deleteOne();
      res.status(200).json("the tool has been deleted");
   } catch (err) {
     res.status(500).json(err);
   }
 });


 //TOOL LIKE
router.put("/:id/like", async (req, res) => {
   try {
     const tool = await Tool.findById(req.params.id);
     if (!tool.like.includes(req.body.userId)) {
      await tool.updateOne({ $push: { like: req.body.userId } });
       res.status(200).json("The tool has been liked");
     } else {
      await tool.updateOne({ $pull: { like: req.body.userId } });
      res.status(200).json("The tool has been disliked");
     }
   } catch (err) {
     res.status(500).json(err);
   }
});

// update
router.put("/:id/update", async (req, res) => {
   try {
     const result = await Tool.findByIdAndUpdate(req.params.id, {
       $set: req.body,
     });
     res.status(200).json(result);
   } catch (err) {
     return res.status(500).json(err);
   }
 }
 );

module.exports = router;