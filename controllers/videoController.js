import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
      const videos = await Video.find({}).sort({ _id: -1 });
      res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
      console.log(error);
      res.render("home", { pageTitle: "Home", videos: [] });
    }
  };

// Search

export const search = async(req, res) => {
   //const searchingBy = req.query.term;
    const { 
        query: { term: searchingBy } 
    } = req;
    let videos = [];
    try{
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i" } 
        });
    }catch(error){
        console.log(error);
    }
    res.render("search", { pageTitle: "SEARCH", searchingBy, videos });
};

// Upload

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
            description,
            creator: req.user.id 
        });
        req.user.videos.push(newVideo.id);
        req.user.save();
        res.redirect(routes.videosDetail(newVideo.id));
    } catch(error){
        console.log(error);
    }
    
};


export const videosDetail = async(req, res) => {
    const{
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id).populate("creator");
        res.render("videosDetail", { pageTitle: video.title, video });
    } catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
};


export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        if(`${video.creator}` !== `${req.user.id}`){
            throw Error();        
        } else{
            res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});   
        }
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



export const deleteVideo = async(req, res) =>{
    const{
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        if(`${video.creator}` !== `${req.user.id}`){
            throw Error();        
        } else{
            await Video.findByIdAndRemove({ _id: id });
        }
    } catch(error){
        console.log(error);
    }
    res.redirect(routes.home);
};