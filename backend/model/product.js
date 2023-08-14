const mongoose = require("mongoose");

const { Schema } = mongoose;
const FoodSchema = new Schema({

    CategoryName: {
        type: String,



    },
    name: {
        type: String,

        required: true

    },


    img: {
        type: String,


    },
    options: [{

        half: {
            type: String
        },
        full: {
            type: String
        },
        regular: {
            type: String
        },
        medium: {
            type: String
        },
        large: {
            type: String
        },




    }],
    description: {
        type: String,


    },
    rating: {
        type: String,


    },


})
module.exports = mongoose.model("fooditem", FoodSchema);