const mongoose = require("mongoose")
const mongoUri = "mongodb+srv://shahumer:Umer12345@cluster0.ewbk07k.mongodb.net/GOFOOD?retryWrites=true&w=majority"
const mongoDb = async () => {

    await mongoose.connect(mongoUri, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("connected")
            const fetch_data = await mongoose.connection.db.collection("foodItems");
            fetch_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err)
                        console.log(err)

                    else
                        console.log(data)
                    global.food_items = data;
                    global.foodCategory = catData;

                })
            })
        }











    })
}
module.exports = mongoDb;

// mongodb://shahumer:Umer123@ac-j6oeibt-shard-00-00.ewbk07k.mongodb.net:27017,ac-j6oeibt-shard-00-01.ewbk07k.mongodb.net:27017,ac-j6oeibt-shard-00-02.ewbk07k.mongodb.net:27017/GOFOOD?ssl=true&replicaSet=atlas-sfeltt-shard-0&authSource=admin&retryWrites=true&w=majority