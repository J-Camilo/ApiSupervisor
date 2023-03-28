const express =  require('express');
const mongoose = require("mongoose");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
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
 console.log(process.env.KEY_URI);

// cnoncetion
mongoose.connect(process.env.KEY_URI)
.then(()=> console.log("Connected a database Atlas"))
.catch((error)=> console.error(error));

app.listen(Door, () => console.log("All is okay... door ", Door));

