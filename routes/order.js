const router = require("express").Router();
const Order = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//Create

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.json(200, savedOrder);
  } catch (err) {
    res.json(err);
  }
});

//update

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(200, updatedOrder);
  } catch (err) {
    console.log(err);
    res.json(500, err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json(200, "Order has been deleted");
  } catch (e) {
    res.json(500, e);
  }
});

//get user Order

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.id });
    res.json(200, orders);
  } catch (e) {
    res.json(500, e);
  }
});

// get all products{}
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (e) {
    res.json(500, e);
  }
});
module.exports = router;
