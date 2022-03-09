"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// export enum mediaType {
//     images, 
//     videos
//   }
const MediaSchema = new mongoose_1.Schema({
    mediaType: {
        type: String,
        enum: ['images', 'videos'],
        default: 'images'
    },
    mediaTitle: {
        type: String,
        required: [true, "Please Enter mediaTitle"],
        maxlength: 50,
        minlength: 3,
    },
    mediaUrls: {
        type: String,
        required: [true, "Please Enter mediaUrls"],
        maxlength: 50,
        minlength: 3,
    },
    priceInToken: {
        type: String,
        required: [true, "Please Enter price"],
        maxlength: 50,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('MediaData', MediaSchema);
