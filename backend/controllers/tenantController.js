const Tenant = require('../models/tenantModel');

// Controller to create a tenant
exports.createTenant = async (req, res) => {
    try {
        const tenant = new Tenant(req.body); // Create a new tenant document
        await tenant.save(); // Save the tenant document to the database
        res.status(201).send('Tenant created successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to update a tenant
exports.updateTenant = async (req, res) => {
    try {
        const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the tenant document
        if (!tenant) {
            return res.status(404).send('Tenant not found'); // Send an error response if tenant not found
        }
        res.status(200).send('Tenant updated successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to delete a tenant
exports.deleteTenant = async (req, res) => {
    try {
        const tenant = await Tenant.findByIdAndDelete(req.params.id); // Delete the tenant document
        if (!tenant) {
            return res.status(404).send('Tenant not found'); // Send an error response if tenant not found
        }
        res.status(200).send('Tenant deleted successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to list all tenants
exports.listTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find(); // Find all tenant documents
        res.status(200).send(tenants); // Send the list of tenants as the response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};
