const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  console.log(req.body.products);
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.products.map((product) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.title,
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      };
    }),

    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json(session.url);
});
module.exports = router;
