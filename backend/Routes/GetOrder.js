const express = require("express");
const router = express.Router();

router.post("/getOrderdetail", (req, res) => {
    res.send([global.orders, ordercount])
})
module.exports = router;