const express = require('express');
const userSchema = require("../models/user")

//constructor
const router = express.Router();

//  Create user 
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get all users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// update
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    userSchema
        .updateOne({_id: id}, { $set:{ name, email, password} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// delete
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
   
    userSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
 

module.exports = router