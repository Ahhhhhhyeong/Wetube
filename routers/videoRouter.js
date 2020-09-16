import express from "express";
import routes from "../routes";
import { videosDetail,
    deleteVideo, 
    getUpload, 
    postUpload, 
    postEditVideo,
    getEditVideo
    } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();


// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);


// Video Detail
videoRouter.get(routes.videosDetail(), videosDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;