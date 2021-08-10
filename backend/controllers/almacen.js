const Almacen = require("../models/almacen");

const registerAlmacen = async (req,res) => {
    if (!req.body.name || !req.body.name) {
        return res.status(401).send("Process failed: Imcoplete data");
    }
    const almacen = new Almacen({
        name:req.body.name,
        description: req.body.description,
        dbStatus:true,
    });
    const result = await almacen.save();
    if (!result) return res.status(401).send("Failed to register almacen")
    return res.status(200).send({almacen});
};

const listAlmacen = async (req,res) => {
    const almacen = await Almacen.find();
    if(!role) return res.status(401).send("No almacen");
};

module.exports = { registerAlmacen , listAlmacen };