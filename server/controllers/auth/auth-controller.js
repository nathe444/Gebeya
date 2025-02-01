const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { userName, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });

        // const user = User.findOne({ email });
        // if (user) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "User already exists"
        //     });
        // }
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: response
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "User not created"
        });
    }
};


const login = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}




module.exports = {
    register
}