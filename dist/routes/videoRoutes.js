"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videoController_1 = require("../controllers/videoController");
const router = (0, express_1.Router)();
router.get('/video/:videoId', videoController_1.getVideoById);
exports.default = router;
