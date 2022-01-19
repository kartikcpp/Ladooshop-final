const router=require('express').Router()
const Product=require('../models/Product');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


//Create
 
router.post('/',verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body)
    try{

        const savedProducts=await newProduct.save();
        res.json(200,savedProducts)
    }
    catch(err){res.json(err)} 
})

//update

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(200, updatedProduct);
  } catch (err) {
    console.log(err);
    res.json(500, err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json(200, "Product has been deleted");
  } catch (e) {
    res.json(500, e);
  }
});

//get products

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(200, product);
  } catch (e) {
    res.json(500, e);
  }
});


// get all products{}
router.get('/',async(req,res)=>{
    try{
        const products=await Product.find({})
        res.json(products)
    }
    catch(e){
        res.json(500,e)
    }
})


module.exports=router; 


