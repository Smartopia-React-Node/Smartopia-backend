const router = require("express").Router();
const bcrypt = require('bcrypt');
const Admin = require("../models/admin")


//REGISTER
router.post("/register", async (req, res)=>{
    try {
        //generate new password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    
        //create new user
        const newAdmin = new Admin({
            ...req.body,
            password: hash
        });
    
        //save user and respond
        const admin = await newAdmin.save();
        res.status(200).json(admin);
      } catch (err) {
        res.status(500).json(err)
      }
});
 

//LOGIN
router.post("/login", async (req, res) => {
    try {
      const admin = await Admin.findOne({ email: req.body.email });
      !admin && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compareSync(req.body.password, admin.password); 
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(admin)
    } catch (err) {
      res.status(500).json(err)
    }
  });

//ALL User
router.get("/all", async (req, res)=>{
    try{
       const admins = await Admin.find();
       res.status(200).json(admins);
    }catch(err) {
       console.log(err);
    }
 }); 
 
 //delete ADMIN
router.delete("/:id", async (req, res) => {
    try {
       const user = await Admin.findById(req.params.id);
       await user.deleteOne();
       res.status(200).json("the user has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;