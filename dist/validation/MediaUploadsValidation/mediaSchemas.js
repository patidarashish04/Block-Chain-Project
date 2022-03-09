"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaSchemas = void 0;
const joi_1 = __importDefault(require("joi"));
exports.mediaSchemas = {
    getmediaData: joi_1.default.object({
        mediaType: joi_1.default.string(),
        mediaTitle: joi_1.default.string(),
        mediaUrls: joi_1.default.string(),
        priceInToken: joi_1.default.string()
    })
};
