"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollCourseById = exports.getCourseById = exports.getCourses = void 0;
const getCourses = (req, res) => {
    res.status(200).json('All courses');
};
exports.getCourses = getCourses;
const getCourseById = (req, res) => {
    res.status(200).json('Course by id');
};
exports.getCourseById = getCourseById;
const enrollCourseById = (req, res) => {
    res.status(201).json('Course enrolled successfully');
};
exports.enrollCourseById = enrollCourseById;
