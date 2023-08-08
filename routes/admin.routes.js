const express =require('express');
const router = express.Router()

const {approveAction} =require('../controllers/adminControllers.js')
const protect = require('../middleware/authMiddleware.js')


router.post('/action', approveAction)

module.exports = router;