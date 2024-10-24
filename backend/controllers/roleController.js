const Role = require('../models/roleModel');

// Controller to create a role
exports.createRole = async (req, res) => {
    try {
        const role = new Role(req.body); // Create a new role document
        await role.save(); // Save the role document to the database
        res.status(201).send('Role created successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to update a role
exports.updateRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the role document
        if (!role) {
            return res.status(404).send('Role not found'); // Send an error response if role not found
        }
        res.status(200).send('Role updated successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to delete a role
exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id); // Delete the role document
        if (!role) {
            return res.status(404).send('Role not found'); // Send an error response if role not found
        }
        res.status(200).send('Role deleted successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to list all roles
exports.listRoles = async (req, res) => {
    try {
        const roles = await Role.find(); // Find all role documents
        res.status(200).send(roles); // Send the list of roles as the response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};
