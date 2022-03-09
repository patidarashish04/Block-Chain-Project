import { Router } from "express";
import { getMedia, postmediaData } from "../controllers/mediaController";
import { getmediaDataValidation} from "../validation/MediaUploadsValidation/mediaUploadValidation"
 
const router = Router();

router.get("/get",getmediaDataValidation, getMedia);
router.post("/",getmediaDataValidation, postmediaData);

export default router;