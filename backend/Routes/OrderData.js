const express = require("express");
const router = express.Router();
const Order = require("../model/Order")
router.post("/OrderData", async (req, res) => {

    let data = req.body.order_data

    await data.splice(0, 0, { Order_date: req.body.order_date })

    //if email is not existing in db then create else insert many()
    let eId = await Order.findOne({ "email": req.body.email })

    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]

            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error)
            res.send("server error", error.message)
        }
    }
    else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email }, {
                //$push is used to show prev data and append next data not update
                $push: { order_data: data }
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            res.send("server error ", error.message)
        }
    }

})
router.post("/myOrderData", async (req, res) => {
    try {

        let myData = await Order.findOne({ email: req.body.email })
        res.json({ orderData: myData })
    } catch (error) {
        res.send("server error ", error.message)

    }
})
module.exports = router