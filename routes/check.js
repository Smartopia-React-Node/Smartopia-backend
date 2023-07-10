const router = require("express").Router();


//All SUBISSION
router.get("/", async (req, res) => {
    console.log("kk");
    try {
      res.status(200).json("Running");
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;