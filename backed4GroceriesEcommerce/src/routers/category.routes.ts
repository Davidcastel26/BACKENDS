import { Router } from "express";
import { check } from "express-validator";

const router = Router();

router.get('/', () => {
    console.log('holi')
})

export default router;