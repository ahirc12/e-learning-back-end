import { Category } from "./category";
import { User } from "./user";
import { Video } from "./video";
import mongoose, { Schema } from "mongoose";

export interface Course {
    title: string;
    description: string;
    instructor: User;
    videos: Video[];
    category: Category;
    enrolledStudents: User[];
}

const CourseSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    instructor: { type: Schema.Types.ObjectId, ref: 'User' },
    videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    enrolledStudents: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export const CourseModel = mongoose.model<Course>('Course', CourseSchema);