import { productData } from "../constants/Data.js";
import Product from "../model/product-schema.js";

export const defaultData = async (request, response) => {
    try {
        await Product.insertMany(productData);
        console.log('product inserted successfully');
    } catch (error) {
        console.log('error while inserting the product', error);
    }
}

export const getAllProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        return response.status(200).json(products);
    } catch (error) {
        return response.status(500).json({ msg: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ '_id': id });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}