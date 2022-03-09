"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmediaDataValidation = void 0;
const validator_1 = __importDefault(require("../utils/validator"));
const mediaSchemas_1 = require("./mediaSchemas");
const getmediaDataValidation = (req, res, next) => {
    (0, validator_1.default)(mediaSchemas_1.mediaSchemas.getmediaData, req.body, next);
};
exports.getmediaDataValidation = getmediaDataValidation;
