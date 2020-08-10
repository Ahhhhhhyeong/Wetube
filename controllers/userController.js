import routes from "../routes";

export const postJoin= (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2){
       // res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
};

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "JOIN" });
};


export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "LogIn"});
};
export const postLogin = (req, res) => {
    //  res.render("login", {pageTitle: "LogIn"});
    res.redirect(routes.home);
};

export const logout = (req, res) => res.render("logout", { pageTitle: "LOGOUT" });
export const users = (req, res) => res.render("users", { pageTitle: "USERS" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "USER DETAIL" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EDIT PROFILE" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "CHAGE PASSWORD" });