const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();

const Product = require("./routes/Product");
const Almacen = require("./routes/Almacen");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product",Product);
app.use("/api/almacen",Almacen);

app.listen(process.env.PORT, () => console.log("backen server runnin ok, on port: ",process.env.PORT));

dbConnection();