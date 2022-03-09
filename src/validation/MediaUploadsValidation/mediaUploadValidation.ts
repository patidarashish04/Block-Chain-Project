import { RequestHandler } from "express";
import validator from "../utils/validator";
import { mediaSchemas } from "./mediaSchemas";

export const getmediaDataValidation : RequestHandler = (req, res ,next) => {
    validator( mediaSchemas.getmediaData, req.body, next);
}
    