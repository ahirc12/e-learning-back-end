"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../controllers/courseController");
const router = (0, express_1.Router)();
router.get('/courses', courseController_1.getCourses);
router.get('/courses/:id', courseController_1.getCourseById);
router.post('/enroll/:courseId', courseController_1.enrollCourseById);
exports.default = router;
