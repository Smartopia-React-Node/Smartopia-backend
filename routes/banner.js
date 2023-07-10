const router = require("express").Router();
const Banner = require("../models/banner")


//ADD banner text
router.post("/add", async (req, res)=>{
    const newBanner = new Banner(req.body);
    try{
       const result = await newBanner.save();
       res.status(200).json(result);
    }catch(err) {
       console.log(err);
    }
 });


//GET banner text
 router.get("/get", async (req, res)=>{
    try{
       const result = await Banner.findById("64761b5db9b5a9206e879783");
       res.status(200).json(result);
    }catch(err) {
       console.log(err);
    }
 });

 //UPDATE banner text
 router.put("/update", async (req, res) => {
      try {
        const result = await Banner.findByIdAndUpdate("64761b5db9b5a9206e879783", {
          $set: req.body,
        });
        res.status(200).json(result);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    );
 



module.exports = router;