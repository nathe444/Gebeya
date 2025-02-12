const  mongoose  = require("mongoose");

const productSchema = mongoose.Schema({
    image:{
        type : String,
    },
    title:{
        type : String,
        required : true
    },
    description : {
        type:String,
        required : true
    },
    category:{
        type:String,
        required : true
    },
    brand:{
        type : String,
    },
    price : {
        type : Number,
        required: true
    },
    salePrice:{
        type : Number,
        required: true
    },
    totalStock:{
        type : Number,
        required: true
    }
},{
    timestamps : true
})


module.exports = mongoose.model('Product', productSchema);