import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface Category {
    name: string;
}

const CategorySchema: Schema = new Schema({
    name: { type: String, required: true },
});

export const CategoryModel = mongoose.model<Category>('Category', CategorySchema);