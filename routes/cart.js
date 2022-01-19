const router = require("express").Router();
const Cart = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//Create

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const saveCart = await newCart.save();
    res.json(200, savedCart);
  } catch (err) {
    res.json(err);
  }
});

//update

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(200, updatedCart);
  } catch (err) {
    console.log(err);
    res.json(500, err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json(200, "Cart has been deleted");
  } catch (e) {
    res.json(500, e);
  }
});

//get user cart

router.get("/find/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({userId:req.params.id});
    res.json(200, cart);
  } catch (e) {
    res.json(500, e);
  }
});

// get all products{}
router.get("/", verifyTokenAndAdmin,async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.json(cart);
  } catch (e) {
    res.json(500, e);
  }
});
module.exports=router;