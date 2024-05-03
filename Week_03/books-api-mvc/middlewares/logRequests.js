

const logRequests = (req, res, next) => {
    console.log(req.method);
    next(); // If validation passes, proceed to the next route handler
};

module.exports = logRequests;