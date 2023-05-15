const mongoose = require("mongoose");

const { Schema } = mongoose;
const OrderSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true

    },
    order_data: {
        type: Array,
        unique: true,
        required: true
    },
    order_date: {
        type: Date

    }

})
module.exports = mongoose.model("Order", OrderSchema);