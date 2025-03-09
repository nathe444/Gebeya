const { model } = require("mongoose");
const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {
    const filteredProducts = await Product.find();
    res.status(200).json({
      success: true,
      filteredProducts,
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "some error occured",
    });
  }
};

module.exports = { getFilteredProducts };
