import { createCategory,
        deleteCategory, 
        getAllCategory, 
        getOneCategory, 
        updateCategory } from "../controllers/category";
import { Router } from "express";
import { check } from "express-validator";

const router = Router();

router.get('/', getAllCategory)

router.get('/:idCategory', getOneCategory)

router.post('/', createCategory)

router.put('/:idCategory', updateCategory)

router.delete('/:idCategory', deleteCategory)

export default router;