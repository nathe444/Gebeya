const { uploadImageUtils } = require('../../helpers/cloudinary');
const Product = require('../../models/Product');

const handleImageUpload = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const url = `data:${req.file.mimetype};base64,${b64}`;
        const result = await uploadImageUtils(url);
        res.json({
            success: true,
            message: "Image uploaded successfully",
            result
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error uploading image"
        })
    }
}


const addProduct = async (req, res) => {
    try {
        const {
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock
        } = req.body;

        const newProduct = new Product({
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock
        })

        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: newProduct
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error adding product"
        })
    }
}


const fetchAllProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            products
        })

    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Error fetching products"
        })
    }


}


const editProduct = async (req, res)=>{
    const {id} = req.params;
    const {
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock
    } = req.body;
    try {
        const product = await Product.findById(id);
        if (!product) {
           return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        product.image = image || product.image;
        product.title = title || product.title;
        product.description = description || product.description;
        product.category = category || product.category;
        product.brand = brand || product.brand;
        product.price = price || product.price;
        product.salePrice = salePrice || product.salePrice;
        product.totalStock = totalStock || product.totalStock;

        await product.save();
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        })
        } catch(e){
            console.log(e);
            res.status(500).json({
                success: false,
                message: "Error updating product"
            })
        }

}

const deleteProduct = async (req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.json({
            success: true,
            message: "Product deleted successfully"
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: "Error deleting product"
        })
    }
}

module.exports = { handleImageUpload, addProduct, fetchAllProducts, editProduct, deleteProduct };