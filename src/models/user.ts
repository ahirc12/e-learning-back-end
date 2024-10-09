import mongoose, { Schema } from "mongoose";
import { Course } from "./course";
import { Role } from "./role";

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: Role;
    enrolledCourses: Course[];
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

export const UserModel = mongoose.model<User>('User', UserSchema);