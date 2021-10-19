const express = require("express");
const cors = require("cors")

const app = express();

var corsOption = {
    origin:'http://localhost:8081'
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res) => {
    res.json({message: "welcome"});
})

const db = require("./Models/index");
db.sequelize.sync();

require("./Routes/tutrorial.routes")(app);

const PORT = 8080;
app.listen(PORT,() => {
    console.log(`running at ${PORT}`);
})