import { RequestHandler } from "express";
const { StatusCodes } = require("http-status-codes");
import createHttpError from 'http-errors';
import MediaData  from "../models/mediaDataModel"

//* get Method
export const getMedia : RequestHandler = async (req, res, next) => {
  const data = await MediaData.find().sort("createdAt");
  res.status(StatusCodes.CREATED).json({
      
    msg:"Here Are the List",
     status: StatusCodes.OK,
     productList:data,
     count: data.length
  });
  console.log(data)
};

//* post Method
export const postmediaData: RequestHandler = async (req, res, next) =>{
    const {mediaType, mediaTitle,mediaUrls,priceInToken}:IMediaData = req.body;
   try{
    const example = await MediaData.findOne({priceInToken })
    if(example)
    return next(createHttpError(406, "This priceInToken already exist"))
    const newExample = new MediaData({mediaType, mediaTitle,mediaUrls,priceInToken})
    await newExample.save();
    res.json({mediaType, mediaTitle,mediaUrls,priceInToken})
   }
   catch(error){
return next(createHttpError.InternalServerError)
   }
};

module.exports = {
  getMedia,
  postmediaData
};