import mongoose, { Schema } from "mongoose";
import { Course } from "./course";

export interface Video {
    title: string;
    url: string; // S3 bucket url
    course: Course;
    duration: number; // in seconds
    thumbnail: string;
}

const VideoSchema: Schema = new Schema({
    
    title: { type: String, required: true },
    url: { type: String, required: true, },
    thumbnail: { type: String, required: true, },
    duration: { type: Number, required: true, },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
});

export const VideoModel = mongoose.model<Video>('Video', VideoSchema);