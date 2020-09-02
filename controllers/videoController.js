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

export const videos = (req, res) => res.render("videos", { pageTitle: "VIDEOS" });
export const videosDetail = (req, res) => res.render("videosDetail", { pageTitle: "VIDEOS DETAIL" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EDIT VIDEO" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DELETE VIDEO" });