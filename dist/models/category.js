"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const CategorySchema = new mongoose_2.Schema({
    name: { type: String, required: true },
});
exports.CategoryModel = mongoose_1.default.model('Category', CategorySchema);
