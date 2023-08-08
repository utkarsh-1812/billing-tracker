const express = require('express');
const router=express.Router();

const {welcomeMessage}=require('../controllers/homeControllers')

router.get('/', welcomeMessage)

module.exports=router;