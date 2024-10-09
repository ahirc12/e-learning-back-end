import { Request, Response } from 'express';
import { User } from '../models/user';
import { incrementId } from '../helpers/helper';

let users: User[] = [];
let userId = 'u000001';

export const loginUser = (req: Request, res: Response) => {
    res.status(200).json('Login successful');
};

export const createUser = (req: Request, res: Response) => {
    const newUser: User = {
        id: incrementId(userId),
        name: req.body.name,
        email: req.body.email,
        password: 'asdasd',
        enrolledCourses: [],
        role: 'Student'
    };
    users.push(newUser);
    res.status(201).json(newUser);
};
