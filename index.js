const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cors=require('cors')
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoutes=require('./routes/cart')
const orderRoutes = require("./routes/order");
const checkoutRoute=require('./routes/stripe')
const app=express()

app.use(
  cors({ origin: "https://ladooshop.herokuapp.com/" })
);
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log('connected to db')})
    .catch((err)=>{
        console.log(err)
    })

    app.use('/api/user',userRoute)
    app.use('/api/auth',authRoute)
    app.use('/api/products',productRoute)
    app.use('/api/carts',cartRoutes)
    app.use("/api/orders",orderRoutes);
    app.use('/api/checkout',checkoutRoute)

    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "/client/build", "index.html"));
    });

app.listen(process.env.PORT||5000,()=>{
    console.log('backend running');
})