"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postmediaData = exports.getMedia = void 0;
const { StatusCodes } = require("http-status-codes");
const http_errors_1 = __importDefault(require("http-errors"));
const mediaDataModel_1 = __importDefault(require("../models/mediaDataModel"));
//* get Method
const getMedia = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield mediaDataModel_1.default.find().sort("createdAt");
    res.status(StatusCodes.CREATED).json({
        msg: "Here Are the List",
        status: StatusCodes.OK,
        productList: data,
        count: data.length
    });
    console.log(data);
});
exports.getMedia = getMedia;
//* post Method
const postmediaData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { mediaType, mediaTitle, mediaUrls, priceInToken } = req.body;
    try {
        const example = yield mediaDataModel_1.default.findOne({ priceInToken });
        if (example)
            return next((0, http_errors_1.default)(406, "This priceInToken already exist"));
        const newExample = new mediaDataModel_1.default({ mediaType, mediaTitle, mediaUrls, priceInToken });
        yield newExample.save();
        res.json({ mediaType, mediaTitle, mediaUrls, priceInToken });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.postmediaData = postmediaData;
module.exports = {
    getMedia: exports.getMedia,
    postmediaData: exports.postmediaData
};
