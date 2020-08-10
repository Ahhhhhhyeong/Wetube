import {video} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "HOME", video })
};

export const search = (req, res) => {
   //const searchingBy = req.query.term;
    const { 
        query: { term: searchingBy } 
    } = req;
    res.render("search", { pageTitle: "SEARCH", searchingBy, video });
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "UPLOADE" })
};

export const postUpload = (req, res) => {
    const{
        body: {file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videosDetail(324394));
};

export const videos = (req, res) => res.render("videos", { pageTitle: "VIDEOS" });
export const videosDetail = (req, res) => res.render("videosDetail", { pageTitle: "VIDEOS DETAIL" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EDIT VIDEO" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DELETE VIDEO" });