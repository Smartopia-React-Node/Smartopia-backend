const router = require("express").Router();
const Banner = require("../models/banner");
const allBanner = require("../models/allbanner");


//GET banner text
 router.get("/get", async (req, res)=>{
    try{
       const result = await Banner.findById("64761b5db9b5a9206e879783"); //only use find() to return array
       res.status(200).json(result);
    }catch(err) {
       console.log(err);
    }
 });
//GET all banners
 router.get("/get/all", async (req, res) => {
   try {
      const result = await allBanner.find();
      res.status(200).json(result);
   } catch (error) {
      console.log(error);
   }
 })


 //UPDATE banner text + add text to AllBanners
 router.put("/update", async (req, res) => {
      try {
        const result = await Banner.findByIdAndUpdate("64761b5db9b5a9206e879783", {
          $set: req.body,
        }, {new: true});
        // adds text to AllBanners
        const newBanner = new allBanner(req.body);
        await newBanner.save();
        res.status(200).json(result);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
);
//selecting a banner AllBanners
router.put("/use/:id", async (req, res) => {
   const textID = req.params.id;
   try {
      const banner = await allBanner.findOne({_id: textID},{text:1, _id:0});
      const result = await Banner.findByIdAndUpdate("64761b5db9b5a9206e879783", 
         banner , {new: true}
      )
      res.status(200).json(result);
   } catch (error) {
      console.log(error);
   }
});
//editing a banner
router.put("/edit/:id", async (req, res) => {
   const textID = req.params.id;
   console.log(textID);
   try {
      const result = await allBanner.replaceOne({_id: textID}, {text: req.body.text});
      res.status(200).json(result);
   } catch (error) {
      console.log(error);
   }
})


//deleting a banner
router.delete("/delete/:id", async (req, res) => {
   const textID = req.params.id;
   try {
      const result = await allBanner.deleteOne({_id: textID});
      res.status(200).json(result);
   } catch (error) {
      console.log(error);
   }
});
 

module.exports = router;
