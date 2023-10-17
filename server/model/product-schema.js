import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    ProductId: {
        type: Number,
        required: true,
        unique: true
    },
    URL: String,
    MRP: Number,
    Price: Number,
    Description: String,
    RecommendedBy: Number,
    Name: String
});

const Product = mongoose.model('product', productSchema);

export default Product;