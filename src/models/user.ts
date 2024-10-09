import { Course } from "./course";

export interface User {
    id: string; // id starts from u000001
    name: string;
    email: string;
    password: string;
    role: string;
    enrolledCourses: Course[];
}