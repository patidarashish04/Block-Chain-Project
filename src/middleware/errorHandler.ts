import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err , req ,res, next ) =>{
    console.log(err.message, err.statuscode);
    if(res.headersSent){
        return next(err);
    }

    res
    .status(err.statuscode || 500)
    .json({message:err.message || "an unknown error"});
};