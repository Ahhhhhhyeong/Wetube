import express from "express";
import routes from "../routes";
import { videosDetail,
    deleteVideo, 
    getUpload, 
    postUpload, 
    postEditVideo,
    getEditVideo
    } from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();


// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload,  onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videosDetail(), videosDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;