const express = require('express');
const {handleImageUpload} = require('../../controllers/admin/products-controller');
const {upload} =  require('../../helpers/cloudinary');
const router = express.Router();
const {addProduct, fetchAllProducts, editProduct, deleteProduct} = require('../../controllers/admin/products-controller');


router.post('/upload-image',upload.single('image'),handleImageUpload);
router.post('/add',addProduct);
router.get('/get',fetchAllProducts);
router.put('/edit/:id',editProduct);
router.delete('/delete/:id',deleteProduct);

module.exports = router;