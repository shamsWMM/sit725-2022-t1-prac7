require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors");
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoute");

//serve statically from a folder called public
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/projects", projectRoutes);

var port = process.env.port || 3000;

//has a callback
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    // createColllection('pets');

})

