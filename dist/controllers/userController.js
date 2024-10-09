"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.loginUser = void 0;
const user_1 = require("../models/user");
const role_1 = require("../models/role");
const loginUser = (req, res) => {
    res.status(200).json('Login successful');
};
exports.loginUser = loginUser;
const createUser = async (req, res) => {
    const { name, email, password, role, enrolledCourses } = req.body;
    try {
        const roleObj = await role_1.RoleModel.findById(role);
        if (roleObj) {
            const newUser = new user_1.UserModel({ name, email, password, roleObj, enrolledCourses });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }
        else {
            res.status(400).json({ message: 'Invalid role' });
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};
exports.createUser = createUser;
