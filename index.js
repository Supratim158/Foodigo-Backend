const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(()=>{console.log("Foodigo DB connected")
})
.catch((err)=>{console.log(err);
})

app.get('/',(req, res)=> res.send("Hello foodigo users"));
app.listen(process.env.PORT || 1508, ()=> console.log(`Foodigo Server running on port: ${process.env.PORT }`))