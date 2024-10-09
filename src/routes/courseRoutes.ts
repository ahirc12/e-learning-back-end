import { Router } from 'express';
import { enrollCourseById, getCourseById, getCourses } from '../controllers/courseController';

const router = Router();

router.get('/courses', getCourses);
router.get('/courses/:id', getCourseById);
router.post('/enroll/:courseId', enrollCourseById);

export default router;