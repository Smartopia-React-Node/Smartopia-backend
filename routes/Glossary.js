const router = require("express").Router();
const Glossary = require("../models/glossary");

//Add GLOSSARY
router.post("/add", async (req, res) => {
  const newGlossary = new Glossary(req.body);
  try {
    const glossary = await newGlossary.save();
    res.status(200).json(glossary);
  } catch (err) {
    console.log(err);
  }
});

//GET ALL GLOSSARY
router.get("/all", async (req, res) => {
  try {
    const allGlossary = await Glossary.find();
    res.status(200).json(allGlossary);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const glossary = await Glossary.findById(req.params.id);
    await glossary.deleteOne();
    res.status(200).json("the Glossary has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const editedGlossary = await Glossary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.send(editedGlossary);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
