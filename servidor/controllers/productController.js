const Producto = require("../models/Producto");

exports.crearProduct = async(req, res) => {
    //console.log(req.body);
    try {
        let product;

        // Creamos product
        product = new Producto(req.body);

        await product.save();

        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo error');

    }
}

exports.obtenerProducts = async(req, res) => {
    try {
        const products = await Producto.find();
        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo error');

    }

}

exports.actualizar = async(req, res) => {
    try {
        const {
            nombre,
            categoria,
            ubicacion,
            precio
        } = req.body;
        let product = await Producto.findById(req.params.id);

        if (!product) {
            res.status(404).json({
                msg: "No existe el producto."
            })
        }
        product.nombre = nombre;
        product.categoria = categoria;
        product.ubicacion = ubicacion;
        product.precio = precio;

        product = await Producto.findOneAndUpdate({ _id: req.params.id },
            product, { new: true });
        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo error');

    }

}

exports.obtenerProduct = async(req, res) => {
    try {
        let product = await Producto.findById(req.params.id);

        if (!product) {
            res.status(404).json({
                msg: "No existe el producto."
            })
        }

        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo error');

    }

}

exports.eliminarProduct = async(req, res) => {
    try {
        let product = await Producto.findById(req.params.id);

        if (!product) {
            res.status(404).json({
                msg: 'No existe el producto.'
            })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })

        res.json({
            msg: "Producto eliminado con exito"
        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo error');

    }

}