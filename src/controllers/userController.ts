import { Request, Response } from 'express';
import { UserModel } from '../models/user';
import { Role, RoleModel } from '../models/role';

export const loginUser = (req: Request, res: Response) => {
    res.status(200).json('Login successful');
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, role, enrolledCourses } = req.body;
    try {
        const roleObj: Role | null = await RoleModel.findById(role);
        if (roleObj) {
            const newUser = new UserModel({ name, email, password, roleObj, enrolledCourses });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } else {
            res.status(400).json({ message: 'Invalid role' });
        }

    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};
