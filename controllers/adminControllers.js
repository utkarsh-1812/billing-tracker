const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");


// @desc    Approve/Disapprove new users
// @route   POST /api/admin/action
// @access  Private
const approveAction = asyncHandler(async (req, res) => {
  
    const {_id, isApproved} = req.body;

    const user= await User.findByIdAndUpdate({_id:_id}, {isApproved:isApproved});

    if(user){
        res.status(200).json({message: "Account Approved!"})
    }else{
        res.status(404)
        throw new Error("User not found")

    }

});

const changeStatus=asyncHandler(async (req, res)=>{
    const {_id, isActivated}=req.body;
    const user=await User.findByIdAndUpdate({_id:_id}, {isActivated:isActivated});
    
})

module.exports = { approveAction };