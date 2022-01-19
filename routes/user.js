const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router=require('express').Router();
const cryptojs=require('crypto-js');
const User = require('../models/User');

//update
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){

        req.body.password = cryptojs.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString();
    }
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.json(200,updatedUser)
    }
    catch(err){
        console.log(err)
        res.json(500,err)

    }


})

//Delete
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
await User.findByIdAndDelete(req.params.id)
res.json(200,"user has been deleted")


    }
    catch(e){
        res.json(500,e)
    }
})

//get user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user=await User.findById(req.params.id);
    res.json(200,user);
  } catch (e) {
    res.json(500, e);
  }
});
module.exports=router;

