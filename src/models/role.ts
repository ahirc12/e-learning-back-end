import mongoose, { Schema } from "mongoose";

export interface Role {
    name: string;
}

const RoleSchema: Schema = new Schema({
    name: { type: String, required: true },
});

export const RoleModel = mongoose.model<Role>('Category', RoleSchema);