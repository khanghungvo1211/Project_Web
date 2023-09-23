const e = require('express');
const User = require('../models/userModel');
const asynchHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const validateMongoDbId = require('../utils/validateMongoDbId');

const createUser = asynchHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error('User Already Exists');
    }
});

const loginUserController = asynchHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exists or not
    const findUser = await User.findOne({email});
    if (findUser && (await findUser.isPasswordMatched(password))){   
        res.json({
            _id: findUser?._id,
            firstname:findUser?.firstname,
            lastname:findUser?.lastname,
            email: findUser?.email,
            mobile:findUser?.mobile,
            token:generateToken(findUser?._id),

        });

    } else{
        throw new Error("Invalid Credentials");
    }


});

// Update a user

const updateaUser = asynchHandler(async (req,res) => {
    console.log();
    const {_id} = req.user;
    validateMongDbId(_id);
    try{

        const updateUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
    },{
        new: true,
    });
    res.json(updateUser);
}      
     catch(error){
        throw new Error(error)
    }
});

//Get all users

const getallUser = asynchHandler(async (req,res) => {
    try{
        const getUsers = await User.find();
        res.json(getUsers);
    }
    catch(error){
        throw new Error(error)
    }
})

//Get a single users

const getaUser = asynchHandler(async (req,res) => {
    const{id} = req.params;
    validateMongoDbId(id);
    try{
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        })

    } catch(error){
        throw new Error(error);
    }
});

// Delete a user
const deleteaUser = asynchHandler(async (req,res) => {
    const{id} = req.params;
    validateMongoDbId(id);
    try{
        const getaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        })

    } catch(error){
        throw new Error(error);
    }
});

const blockUser = asynchHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const blockusr = await User.findByIdAndUpdate(
            id ,{
            isBlocked: true,
        },
        {
            new: true,
        }
    );
        res.json({
            message: "User Blocked",
        })
        
    } catch (error){
        throw new Error(error);

    }
});
const unblockUser = asynchHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const unblock =  await User.findByIdAndUpdate(
            id ,{
            isBlocked: false,
        },
        {
            new: false,
        }
    );
        res.json({
            message: "User Unblocked",
        });
    } catch (error){
        throw new Error(error);
    };

    });


module.exports = { createUser, loginUserController, getallUser, getaUser, deleteaUser, updateaUser, blockUser, unblockUser};
