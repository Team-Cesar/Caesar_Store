module.exports = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/signin');
    },
    isNotLoggedIn(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/');
    },
    isAdmin(req, res, next) {
        if (req.user.user_role == 3){
            return next();
        }
        return res.redirect('/');
    }
}