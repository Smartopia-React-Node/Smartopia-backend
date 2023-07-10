const router = require("express").Router();
const Submit = require("../models/submit")

//All SUBISSION
router.get("/allsubmission", async (req, res) => {
    try {
      const submits = await Submit.find();
      res.status(200).json(submits);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Submit TOOL
router.post("/submittool", async (req, res)=>{
  const newTool = new Submit(req.body);
  
  try{
     const tool = await newTool.save();
     res.status(200).json(tool);
  }catch (err) {
     console.log(err);
  }
})

  //DELETE SUBMISSION
  router.delete("/delete/:id", async (req, res) => {
    try {
       const submitedItem = await Submit.findById(req.params.id);
       await submitedItem.deleteOne();
       res.status(200).json("the submission has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;