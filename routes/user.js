import express from "express";
import UserModel from "../models/UserModel.js";

const router = express.Router();

// router.get('/', (req, res) => {
//     console.log("Hi");
//     res.send("Hi!!");
// })


// ROUTE 1: Fetching All the Times using: GET "/:id". LocalStorage ID Required
router.get('/:id', async (req, res) => {

    try {

    const user = await UserModel.find({id: req.params.id});
    res.json(user);
    // console.log(user);

    
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");    
}

});










// ROUTE 2: Add a new Time using: POST "/:id". LocalStorage ID Required
router.post('/', async (req, res) => {

    try {

    const { time, id } = req.body;



    const user = new UserModel({
        id, time
    });
    const savedTime = await user.save();

    res.json(savedTime);

            
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
}
})











export default router;