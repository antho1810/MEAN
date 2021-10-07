// Rutas
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//API
router.post('/', productController.crearProduct);
router.get('/', productController.obtenerProducts);
router.put('/:id', productController.actualizar);
router.get('/:id', productController.obtenerProduct);
router.delete('/:id', productController.eliminarProduct);


module.exports = router;