import express from 'express'
import { getAllProducts, getProductById } from '../controller/product-controller.js';
import { signupUser } from '../controller/user-controller.js';

const router = express.Router();

router.get('/fetchAllProducts', getAllProducts);
router.get('/fetchProductById/:id', getProductById);
router.get('/addProductToCart/:id', getProductById);
router.post('/user/signup', signupUser);

export default router;