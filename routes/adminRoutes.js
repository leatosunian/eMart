import express from 'express'
import { login, register, getEmployees, getOneEmployee, editEmployee, disableEmployee, saveShippingSettings, getShippingSettings } from '../controllers/adminController.js'
import checkAuth from '../middlewares/authMiddleware.js'

const router = express.Router()

// EMPLOYEES ROUTES //
router.post('/login', login)
router.post('/createadmin', checkAuth, register)
router.get('/employees', checkAuth, getEmployees)
router.get('/employees/:id', checkAuth, getOneEmployee)
router.post('/confirmedit/:id', checkAuth, editEmployee)
router.put('/disable/:id', checkAuth, disableEmployee)

// SHIPPING SETTINGS ROUTES //
router.post('/config/shipping', checkAuth, saveShippingSettings)
router.get('/config/shipping/get/:id', checkAuth, getShippingSettings)

export default router


