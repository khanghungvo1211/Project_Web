const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async(req,res,next)=> {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authMiddleware.split(" ")[1];
        try{
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log(decoded);
            }

        } catch(error){
            throw new Error("Not Authorized token expired, Please Login Again");
        }

    } else {
        throw new Error("There is no token atthched to header");
    }
})
module.exports = authMiddleware;  