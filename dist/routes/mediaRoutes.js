"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mediaController_1 = require("../controllers/mediaController");
const mediaUploadValidation_1 = require("../validation/MediaUploadsValidation/mediaUploadValidation");
const router = (0, express_1.Router)();
router.get("/get", mediaUploadValidation_1.getmediaDataValidation, mediaController_1.getMedia);
router.post("/", mediaUploadValidation_1.getmediaDataValidation, mediaController_1.postmediaData);
exports.default = router;
