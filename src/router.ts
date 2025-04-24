import {Router} from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';
import { createProduct, getOneProduct, getProducts } from './handlers/product';


const router = Router()

/**
 * Products
 */
router.get('/product', getProducts )
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), handleInputErrors ,(req, res) => {
   
})
router.post('/product', body('name').isString(), handleInputErrors ,createProduct)
router.delete('/product/:id', () => {})

/**
 * Updates
 */
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id',
    body("title").optional(),
    body("body").optional(),
    body("status").isIn(['IN_RPGRESS','SHIPPED','DEPRECATED']),
    body("version").optional(), 
    () => {})
router.post('/update',
    body("title").exists().isString(),
    body("body").exists().isString(),
    () => {})
router.delete('/update/:id', () => {})

/**
 * Update point
 */
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id',
    body("name").optional().isString(),
    body("description").optional().isString(), 
    () => {}
)
router.post('/updatepoint', 
    body("name").isString(),
    body("description").isString(),
    body("updateId").exists().isString(),
    () => {}
)
router.delete('/updatepoint/:id', () => {})

export default router