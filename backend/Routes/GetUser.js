const express = require("express");
const Users = require("../model/Users");
const router = express.Router();

router.post("/getUser", (req, res) => {
    res.send([global.users, usercount])
})
module.exports = router;
