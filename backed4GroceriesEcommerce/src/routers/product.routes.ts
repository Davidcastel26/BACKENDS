import { Router } from "express";
import { check } from "express-validator";

import { createProduct, 
    deleteProduct, 
    getAllProducts, 
    getOneProduct, 
    updateProduct} from "../controllers/product";

const router = Router();

router.get('/', getAllProducts);

router.get('/:idProduct', getOneProduct);

router.post('/', createProduct);

router.put('/:idProduct', updateProduct );

router.delete('/:idProduct', deleteProduct);

export default router;