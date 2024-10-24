const Tenant = require('../models/tenantModel');

const tenantMiddleware = async (req, res, next) => {
    try {
        const tenantId = req.header('X-Tenant-ID'); // Get the tenant ID from the request header
        if (!tenantId) {
            return res.status(400).send('Tenant ID is required'); // Send an error response if tenant ID is missing
        }
        const tenant = await Tenant.findById(tenantId); // Find the tenant document by ID
        if (!tenant) {
            return res.status(404).send('Tenant not found'); // Send an error response if tenant not found
        }
        req.tenant = tenant; // Attach the tenant document to the request
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

module.exports = tenantMiddleware;
