// const { decrypt, encrypt } = require("../../../utils/argonED");
// const config = require('../../config');
// const jwt = require('jsonwebtoken')
// const User = require("../../models/User");
import { decrypt, encrypt } from "../../../utils/argonED.js";
import config from '../../config/index.js';
import jwt from 'jsonwebtoken';
import User from "../../models/User.js";

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (!findUser) return res.status(403).json({ error: "Invalid credentials" });
        const isPasswordValid = await decrypt(password, findUser.password);
        if (!isPasswordValid) return res.status(403).json({ error: "Invalid credentials" });


        const token = jwt.sign({ email: findUser.email, role: findUser.role }, config.jwtDecryptKey,{expiresIn:'1h'});



        console.log("🚀 -> 🌏 ~ file: authController.js:15 ~ const login= ~ token:", token);
        res.status(200).json({ message: "Login successful", token, user: findUser });
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
const register = async (req, res) => {
    const { email,name, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User with this email already exists" });
        const encryptedPassword = await encrypt(password);
        const newUser = new User({
            name,
            email,
            password: encryptedPassword,
            role:'user'
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error occurred during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export {register,login}