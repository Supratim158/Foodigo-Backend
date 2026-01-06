const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require("./routes/categoryRoute");

dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(()=>{console.log("Foodigo DB connected")
})
.catch((err)=>{console.log(err);
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/category",CategoryRoute);

app.listen(process.env.PORT || 1508, ()=> console.log(`Foodigo Server running on port: ${process.env.PORT }`))