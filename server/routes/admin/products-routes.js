const express = require('express');
const {handleImageUpload} = require('../../controllers/admin/products-controller');
const {upload} =  require('../../helpers/cloudinary');
const router = express.Router();


router.post('/upload-image',upload.single('image'),handleImageUpload);

module.exports = router;