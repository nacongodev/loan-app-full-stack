const Role = require('../models/roleModel');

const roleMiddleware = (requiredRoles) => {
    return async (req, res, next) => {
        try {
            const userRole = req.user.role; // Get the user's role from the request
            const role = await Role.findOne({ name: userRole }); // Find the role document by name
            if (!role || !requiredRoles.includes(role.name)) {
                return res.status(403).send('Access denied'); // Send an error response if access is denied
            }
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            res.status(400).send(error.message); // Send an error response if something goes wrong
        }
    };
};

module.exports = roleMiddleware;
