const router = require("express").Router();
const User = require("../models/User");
const cryptojs = require("crypto-js");
const jwt=require('jsonwebtoken');
router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptojs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  newUser
    .save()
    .then((saveduser) => {
      console.log(saveduser);
      res.json(saveduser);
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    });
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if(!user) return res.status(401).json('wrong credential');
    const hashedPassword = cryptojs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const userpassword = hashedPassword.toString(cryptojs.enc.Utf8);
    if(userpassword!==req.body.password) return res.status(401).json('wrong password');
    const {password,...others}=user._doc


        //ok
       const accesToken=jwt.sign({
           id:user._id,
           isAdmin:user.isAdmin
       },process.env.JWT_SEC,{expiresIn:'3d'})


    res.status(200).json({...others,accesToken})

  } catch (err) {
    res.json({err,msg:'h'});
  }
});
module.exports = router;
