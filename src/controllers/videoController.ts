import { Request, Response } from "express";

export const getVideoById = (req: Request, res: Response) => {
    res.status(200).json('Video by id');
};