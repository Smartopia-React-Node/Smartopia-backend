const router = require("express").Router();
const Tutorial = require("../models/tutorial")
const fetch = require("node-fetch");

//GET video DETAILS OF TUTORIAL
const video_details_API_call = async (id)=>{
    const fetch_res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.YT_API_KEY}`);
    return await fetch_res.json();
}
router.get("/video_details/v=:id", async (req, res)=>{
    try{
       const result =await video_details_API_call(req.params.id)
       console.log(result);
       res.status(200).send(result);
    }catch(err) {
       console.log(err);
    }
 });  

//Add TUTORIAL
router.post("/addtutorial", async (req, res)=>{
   const newTutorial = new Tutorial(req.body);
   try{
      const tutorial = await newTutorial.save();
      res.status(200).json(tutorial);
   }catch(err) {
      console.log(err);
   }
});

//GET ALL TUTORIAL
router.get("/alltutorial", async (req, res)=>{
   try{
      const tutorials = await Tutorial.find();
      res.status(200).json(tutorials);
   }catch(err) {
      console.log(err);
   }
});

//DELETE TUTORIAL
router.delete("/delete/:id", async (req, res) => {
   try {
      const tutorial = await Tutorial.findById(req.params.id);
      await tutorial.deleteOne();
      res.status(200).json("the tutorial has been deleted");
   } catch (err) {
     res.status(500).json(err);
   }
 });

module.exports = router;