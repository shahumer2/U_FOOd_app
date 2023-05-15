const express = require("express")
const app = express();
const mongoDb = require("./db")
mongoDb();

app.get("/", (req, res) => {
    res.send("hello world")

})
let cors = require("cors");
app.use(cors());
app.use(express.json())
app.use("/api", require("./Routes/CreateUser"))
app.use("/api", require("./Routes/Displayfood"))
app.use("/api", require("./Routes/OrderData"))








app.listen(4000, () => {
    console.log("app is listening at port 4000")

})