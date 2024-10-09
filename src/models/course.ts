import { User } from "./user";
import { Video } from "./video";

export interface Course {
    id: string; // id starts from c000001
    title: string;
    description: string;
    instructor: User[];
    videos: Video[];
    category: string;
    enrolledStudents: User[];
}
