import mongoose, { Schema } from "mongoose";

export interface Role extends Document {
    name: string;
}

const RoleSchema: Schema = new Schema({
    name: { type: String, required: true },
});

export const RoleModel = mongoose.model<Role>('Role', RoleSchema);