const middle_ware = (req, res, next) => {
    if (!req.query.age) {
        res.send("please provide age");
    } else if (req.query.age < 18) {
        res.send("You are not allowed to access this page");
    } else {
        next();
    }
};

module.exports = middle_ware;
