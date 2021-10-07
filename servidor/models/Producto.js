const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({


    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    fechaCrecion: {
        type: Date,
        default: Date.now()
    }

});


module.exports = mongoose.model('Product', ProductSchema);