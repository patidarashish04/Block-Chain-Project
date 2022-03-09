import {Schema, model, Document} from 'mongoose';

export interface IMedia extends Document {
    mediaType:string;
    mediaTitle: string;
    mediaUrls: string;
    priceInToken:string;
}
// export enum mediaType {
//     images, 
//     videos
//   }

const MediaSchema : Schema = new Schema({
    mediaType: {
        type: String,
        enum: ['images','videos'],
        default:'images'
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
        type: String ,
        required: [true, "Please Enter price"],
        maxlength: 50,
    },
},
{ timestamps: true }
);

export default model<IMedia>('MediaData', MediaSchema);