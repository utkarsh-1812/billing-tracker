const express =require('express');
const router = express.Router()

const {registerUser, activatedUser} =require('../controllers/userControllers.js')
const protect = require('../middleware/authMiddleware.js')


router.post('/', registerUser)
router.get('/active', activatedUser)

module.exports = router;