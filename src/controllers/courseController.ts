import { Request, Response } from "express";
import { UserModel } from "../models/user";
import { CourseModel } from "../models/course";

export const getCourses = (req: Request, res: Response) => {
    res.status(200).json('All courses');
};

export const getCourseById = (req: Request, res: Response) => {
    res.status(200).json('Course by id');
};

export const createCourse = async (req: Request, res: Response) => {
    const { title, description, category, instructor, videos, enrolledStudents } = req.body;
    try {
        const newCourse = new CourseModel({ title, description, category, instructor, videos, enrolledStudents });
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json({ message: 'Error creating course', error });
    }
};

export const enrollCourseById = (req: Request, res: Response) => {
    res.status(201).json('Course enrolled successfully');
}