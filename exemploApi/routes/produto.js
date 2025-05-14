const express = require('express')
const router = express.Router();
const productController = require('../controllers/produtoController');


router.post('/', productController.post);
router.get('/', productController.getAll);
router.get('/:id', productController.getID);
router.put('/:id', productController.put);
router.delete('/:id', productController.delete);


module.exports = router;