const mongoose = require("mongoose");

const { Schema } = mongoose;
const FoodSchema = new Schema({

    CategoryName: {
        type: String,
        unique: true,
        required: true

    },
    name: {
        type: String,
        unique: true,
        required: true

    },


    img: {
        type: String,
        unique: true,
        required: true
    },
    options: [{

        half: {
            type: Number
        },
        full: {
            type: Number
        },
        regular: {
            type: Number
        },
        medium: {
            type: Number
        },
        large: {
            type: Number
        },




    }],
    description: {
        type: String,
        unique: true,
        required: true
    },
    rating: {
        type: Number,
        unique: true,
        required: true
    },


})
module.exports = mongoose.model("fooditem", FoodSchema);