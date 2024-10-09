import { Request, Response } from "express";

export const getCourses = (req: Request, res: Response) => {
    res.status(200).json('All courses');
};

export const getCourseById = (req: Request, res: Response) => {
    res.status(200).json('Course by id');
};

export const enrollCourseById = (req: Request, res: Response) => {
    res.status(201).json('Course enrolled successfully');
}