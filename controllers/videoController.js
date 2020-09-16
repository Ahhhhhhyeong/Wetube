import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
      const videos = await Video.find({});
      res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
      console.log(error);
      res.render("home", { pageTitle: "Home", videos: [] });
    }
  };

export const search = (req, res) => {
   //const searchingBy = req.query.term;
    const { 
        query: { term: searchingBy } 
    } = req;
    res.render("search", { pageTitle: "SEARCH", searchingBy, video });
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "UPLOADE" });
};

export const postUpload = async(req, res) => {
    try{
        const { 
            body:{ title, description}, 
            file: {path} 
        } = req;
        const newVideo = await Video.create({
            fileUrl: path.replace(/\\/g, "/"),
            title,
            description
        });
        console.log(newVideo);
        res.redirect(routes.videosDetail(newVideo.id));
    } catch(error){
        console.log(error);
    }
    
};


/*
export const videos = (req, res) => 
    res.render("videos", { pageTitle: "VIDEOS" });
*/


export const videosDetail = async(req, res) => {
    const{
        params: {id}
    } = req;
    try{
      const video = await Video.findById(id);
      res.render("videosDetail", { pageTitle: "VIDEOS DETAIL", video });
    } catch(error){
        res.redirect(routes.home);
    }
};


export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
    }catch(error){
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try{
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videosDetail(id));
    } catch(error) {
        res.redirect(routes.home);
    }
};



export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "DELETE VIDEO" });