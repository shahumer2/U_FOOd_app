const express = require("express")
const app = express();
var bodyParser = require('body-parser')
const mongoDb = require("./db")
mongoDb();

app.get("/", (req, res) => {
    res.send("hello world")

})
let cors = require("cors");
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ extended: true, limit: '500mb', parameterLimit: 1000000 }));
app.use(express.json())
app.use("/api", require("./Routes/CreateUser"))
app.use("/api", require("./Routes/Displayfood"))
app.use("/api", require("./Routes/OrderData"))
app.use("/api", require("./Routes/CreateAdmin"))
app.use("/api", require("./Routes/GetUser"))
app.use("/api", require("./Routes/GetOrder"))
app.use("/api", require("./Routes/AddFood"))














app.listen(4000, () => {
    console.log("app is listening at port 4000")

})