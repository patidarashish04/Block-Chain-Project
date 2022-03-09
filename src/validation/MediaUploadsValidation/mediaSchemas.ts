import Joi from "joi"

export const mediaSchemas = {
    getmediaData: Joi.object({
        mediaType:Joi.string(),
        mediaTitle: Joi.string(), 
        mediaUrls: Joi.string(),
        priceInToken: Joi.string()
    })


}