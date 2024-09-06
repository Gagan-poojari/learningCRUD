const express = require('express')
const Product = require('../models/product.model.js')
const router = express.Router()
const {getProducts, getProduct, putProducts, editProduct, deleteProduct, deleteProducts} = require('../controllers/product.controller.js')

router.get('/', getProducts);
router.post('/', putProducts);
router.get('/:id', getProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);
// router.delete('/', deleteProducts);


module.exports = router;

