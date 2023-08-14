const express = require("express");

const router = express.Router();
const foodItem = require("../model/product")



router.post("/AddFood", async (req, res) => {
    // console.log(req.body);
    const { base64 } = req.body.img

    await foodItem.create({

        CategoryName: req.body.CategoryName,
        name: req.body.name,

        img: req.body.img,

        options: req.body.options,

        description: req.body.description,
        rating: req.body.rating,



    })
    res.json({ success: true })


})
module.exports = router;