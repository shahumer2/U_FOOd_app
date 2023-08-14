const express = require("express");
const router = express.Router();

router.get("/foodData", (req, res) => {
    res.send([global.food_items, global.foodCategory])
})
module.exports = router;