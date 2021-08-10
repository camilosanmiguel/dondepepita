const mongoose = require("mongoose");

const almacenSchema = new mongoose.Schema({
    name:String,
    direction:String,
    city:String,
});

const almacen = mongoose.model("almacen",almacenSchema);
module.exports = almacen;