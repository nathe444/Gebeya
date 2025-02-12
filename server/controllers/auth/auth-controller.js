const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || userName.trim() === '') {
        return res.status(400).json({
            success: false,
            message: "Username is required"
        });
    }

    try {
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
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "A User with this email does not exist"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
            role: existingUser.role,
            userName: existingUser.userName
        }, 'CLIENT_SECRET_KEY', { expiresIn: "1h" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
        }).json({
            success: true,
            message: "Logged in successfully",
            user: {
                email: existingUser.email,
                id: existingUser._id,
                role: existingUser.role,
                userName: existingUser.userName
            }
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}

const logout = async (req, res) => {
    res.clearCookie("token").status(200).json({
        success: true,
        message: "Logged out successfully"
    });
}

const authMiddleWare = async (req, res , next) => {
    const token = req.cookies.token;
    if (!token) {
       return res.status(401).json({
            success: false,
            message: "Unauthorized User"
        })
    }

    try {
        const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY');
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized User"
        })
    }
}




module.exports = {
    register,
    login,
    logout,
    authMiddleWare
}