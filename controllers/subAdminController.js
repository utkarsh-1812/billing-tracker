const asyncHandler= require('express-async-handler')
const Plan =require('../models/planModel')

// @desc    Form submit from sub admin
// @route   POST /api/subAdmin/
// @access  Private
const approveAction = asyncHandler(async (req, res) => {
  
    const {name, email, planStart, planEnd, isPaid} = req.body;

    const newPlan=new Plan({
        name, 
        email, 
        planStart, 
        planEnd, 
        isPaid
    })
    newPlan.save();
    res.status(200).json({message: "Plan Added!"})
    

});