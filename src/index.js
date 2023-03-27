const express =  require('express');
const mongoose = require("mongoose");
require('dotenv').config();
const userRoute = require("./routes/users");
const cors = require('cors')
const app = express();
const Door = process.env.PORT || 9000

// middleware
app.use(cors());
app.use(express.json());
app.use('/Api', userRoute); 

// routers 
app.get('/', (req, res) =>{
    res.send('welcome to my Api Jc4milo ');
 })

// cnoncetion
mongoose.connect(process.env.KEY_URI)
.then(()=> console.log("Connected a database Atlas"))
.catch((error)=> console.error(error));

app.listen(Door, () => console.log("All is okay... door ", Door));

