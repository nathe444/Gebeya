const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { userName, email, password } = req.body;

    // Validate userName is not empty
    if (!userName || userName.trim() === '') {
        return res.status(400).json({
            success: false,
            message: "Username is required"
        });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: existingUser.email === email 
                    ? "User with this email already exists" 
                    : "Username is already taken"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error creating user"
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