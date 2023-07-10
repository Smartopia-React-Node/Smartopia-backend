const router = require("express").Router();
const bcrypt = require('bcrypt');
const User = require("../models/user")


//REGISTER
router.post("/register", async (req, res)=>{
    try {
        //generate new password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    
        //create new user
        const newUser = new User({
            ...req.body,
            password: hash
        });
    
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err)
      }
});
 

//LOGIN
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compareSync(req.body.password, user.password); 
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });


module.exports = router;